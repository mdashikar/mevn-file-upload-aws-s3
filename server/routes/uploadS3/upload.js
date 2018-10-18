const router = require('express').Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

var s3 = new aws.S3({ 
    accessKeyId: "AKIAJL23NSKNNX72L2XA",
    secretAccessKey: "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"
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