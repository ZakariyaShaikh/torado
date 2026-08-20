const ImageKit = require("@imagekit/nodejs");
const config = require("./config");


const imageKit = new ImageKit({
  publicKey: config.IMAGEKIT_PUBLIC_KEY,
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
  urlEndPoint: config.IMAGEKIT_URL_ENDPOINT,
});

module.exports = imageKit;