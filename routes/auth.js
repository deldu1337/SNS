require("dotenv").config(); // .env 참조

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

const key = process.env.CRYPTO_KEY // .env 안에 있는 키 값 할당

// 암호화 메서드
const cipher = (password, key) => {
  const encrypt = crypto.createCipher('des', key) // des알고리즘과 키를 설정
  const encryptResult = encrypt.update(password, 'utf8', 'base64') // 암호화
  + encrypt.final('base64') // 인코딩
  return encryptResult
}

// 복호화 메서드
const decipher = (password, key) => {
  const decode = crypto.createDecipher('des', key)
  const decodeResult = decode.update(password, 'base64', 'utf8') // 암호화된 문자열, 암호화 했던 인코딩 종류, 복호화 할 인코딩 종류 설정
  + decode.final('utf8') // 복호화 결과의 인코딩
  return decodeResult
}

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password, question, answer } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect('/join?error=exist');
    }
    const pass = cipher(password, key)
    
    await User.create({
      email,
      nick,
      password: pass,
      question,
      answer,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

// 비밀번호 찾기
router.post('/find', isNotLoggedIn, async (req, res, next) => {
  const { email, question, answer } = req.body;
  try {
    const exUser = await User.findOne({ // 이메일, 질문, 답이 동일한 유저를 반환
      where: { 
        email: email,
        question: question,
        answer: answer,
      } 
    });
    if(!exUser) { // exUser 값이 존재하지 않는다면
      return res.redirect(`/find?message=이메일이 존재하지 않거나 올바르지 않은 입력입니다.`);
    } else {
      const pass = decipher(exUser.password, key); // exUser의 암호화된 비밀번호를 복호화
      return res.redirect(`/find?message=${exUser.nick}님의 비밀번호는 ${pass}`);
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/');
});

module.exports = router;
