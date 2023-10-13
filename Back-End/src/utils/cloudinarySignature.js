const cloudinary = require('cloudinary').v2;
const cloudinaryConfig = require('./cloudinary');

cloudinary.config(cloudinaryConfig);

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "image",
  });
  return res;
}


const Multer = require("multer");
// MULTER
const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});



