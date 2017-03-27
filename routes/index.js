var express = require('express');
var router = express.Router();
var multer = require('multer')

/* GET home page. */
var uploading = multer({
  dest: __dirname + '..ploa/public/images/',
   limits: {fileSize: 1000000, files:1},
})

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/upload',multer({ dest: './public/images/'}).single('image'), function(req, res) {
console.log(req.file);
res.status(204).end();
})
module.exports = router;
