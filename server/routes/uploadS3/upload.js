const router = require('express').Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

var s3 = new aws.S3({ 
    accessKeyId: "your_access-key",
    secretAccessKey: "your_secret-key"
})
 
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'practice-mdashikar',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})
 
router.post('/upload', upload.array('photos', 3), function(req, res, next) {
  res.send('Successfully uploaded ' + req.files.length + ' files!')
})

module.exports = router;