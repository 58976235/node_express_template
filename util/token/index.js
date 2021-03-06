const jwt = require("jsonwebtoken");

function getToken(content){
  let secretOrPrivateKey = "2e9ce682208138a55998d43b7f3cfd9f";
  let token = jwt.sign(content, secretOrPrivateKey, {
    expiresIn: 60 * 60 * 24*1, // 1天过期
  });
  return token
}

function validationToken(token){
  let secretOrPrivateKey = "2e9ce682208138a55998d43b7f3cfd9f";
  return jwt.verify(token, secretOrPrivateKey,function (err, decode) {
    if (err) {
      return false
    } else {
      return decode
    }
  })
}

module.exports = {
  getToken,
  validationToken
} 