var express = require('express');
var router = express.Router();
let messages = require('../Messages')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form');
});

router.post('/', function(req,res,next){
    let messageText = req.body.message;
    let user = req.body.name;
    messages.push({
        text: messageText,
        user: user,
        added: new Date()
    });
    res.redirect('/')
});

module.exports = router;
