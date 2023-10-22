const express = require('express');
const router = express.Router();
const{upload}= require('../middleware/multer');
const { uploadImage} = require('../controller/item-controller')

router.post("/upload_image/:id", upload.single("image"), uploadImage);

module.exports=router;