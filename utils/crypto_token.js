const crypto = require('crypto');


const key = Buffer.from('iamakeytoencrypt', 'utf8');
const iv = Buffer.from('iamakeytoencrypt', 'utf8');

// 加密
function encrypt(srcdata) {

    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    let secretdata = cipher.update(srcdata, 'utf8', 'hex') + cipher.final('hex');
    return secretdata;
}

// 解密
function decrypt(secretdata) {

    const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    let srcdata = cipher.update(secretdata, 'hex', 'utf8') + cipher.final('utf8');
    return srcdata;
}

module.exports = {
  encrypt,
  decrypt
};
