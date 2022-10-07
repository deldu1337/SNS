const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const key = process.env.CRYPTO_KEY

const User = require('../models/user');

const cipher = (password, key) => {
  const encrypt = crypto.createCipher('des', key) // des알고리즘과 키를 설정
  const encryptResult = encrypt.update(password, 'utf8', 'base64') // 암호화
  + encrypt.final('base64') // 인코딩
  return encryptResult
}

const decipher = (password, key) => {
  const decode = crypto.createDecipher('des', key)
  const decodeResult = decode.update(password, 'base64', 'utf8') // 암호화된 문자열, 암호화 했던 인코딩 종류, 복호화 할 인코딩 종류 설정
  + decode.final('utf8') // 복호화 결과의 인코딩
}

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      const exUser = await User.findOne({ where: { email } });
      if (exUser) {
        //const result = await bcrypt.compare(password, exUser.password);
        let result = false;
        let pass = cipher(password, key)
        if (exUser.password == pass)
          result = true;
        else
          result = false;
        if (result) {
          done(null, exUser);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};
