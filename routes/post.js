const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');

const { Post, Hashtag, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const post = require('../models/post');

const router = express.Router();

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

//profile폴더가 없으면 생성
try {
  fs.readdirSync('uploadPrf');
} catch (error) {
  console.error('uploadPrf 폴더가 없어 uploadPrf 폴더를 생성합니다.');
  fs.mkdirSync('uploadPrf');
}

router.route('/:id', isLoggedIn)
  .patch(async (req, res, next) => { 
    try {
      const result = await post.increment({
        good: Sequelize.literal('1'), // 좋아요 수 증가
      }, {
        where: { id: req.params.id },
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await post.destroy({ where: { id: req.params.id } });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//prfimg를 저장
const uploadProfile = multer({ 
  storage:multer.diskStorage({
    destination(req,file,cb){ //어디에 
      console.log("uploadPrf저장");
      cb(null,'uploadPrf/');
    },
    filename(req,file,cb){ //어떤 파일을 저장할 지
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname,ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //파일의 최대 크기
});

router.post('/img', isLoggedIn, upload.single('img'), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});

//profile이미지의 response로 url 전달
//Post/post/prfImg
router.post('/prfImg',isLoggedIn, uploadProfile.single('img'),(req,res) => {
  console.log(req.file);
  console.log("/prfImg");
  res.json({ url: `/prfImg/${req.file.filename}` }); //실제 이미지가 저장된 경로 반환
});

const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async (req, res, next) => {
  try {
    console.log(req.user);
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
      good: 0,
    });
    const hashtags = req.body.content.match(/#[^\s#]*/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(tag => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          })
        }),
      );
      await post.addHashtags(result.map(r => r[0]));
    }
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 프로필 사진이 들어오면 DB에 저장
const uploadProfile2 = multer();
router.post('/setPrfImg', isLoggedIn, uploadProfile2.none(), async (req, res, next) => {
  try {
    console.log(req.user);
    console.log("uploadProfile2");
    const post = await User.update({
      prfImg:req.body.url
    },{
      where:{id : req.user.id}
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
  res.redirect('/profile');
});

module.exports = router;
