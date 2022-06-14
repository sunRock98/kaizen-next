// const express = require('express');
// const router = express.Router();
// const { verifyTokenFromCookie } = require('../verifyToken');
// const fs = require('fs');
// const multer = require('multer');
// const path = require('path');


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './client/uploads')
//   },
//   filename: function (req, file, cb) {
      
//     cb(null, Date.now() + path.extname(file.originalname))
//   }
// })

// const upload =  multer({ storage: storage });



// router.post('/file-upload', upload.single('file'), (req, res) => {
//   console.log('im trying to upload');
//   console.log(req.file);
//   res.send(req.file.filename);
// })


// module.exports = router;