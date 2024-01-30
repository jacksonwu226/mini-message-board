let express = require('express');
let router = express.Router();
let messages = require('../Messages')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages });
});

module.exports = router;
