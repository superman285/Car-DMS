var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function (req,res,next) {
    res.render('landing');
});

router.get('/h', function(req, res, next) {
  res.render('header');
});

router.get('/f', function(req, res, next) {
    res.render('footer');
});

router.get('/l', function(req, res, next) {
    res.render('layout', { title: 'Express' });
});

router.get('/bl', function(req, res, next) {
    res.render('backLogin');
});

router.get('/ul', function(req, res, next) {
    res.render('user_layout');
});
router.get('/cl', function(req, res, next) {
    res.render('clue_layout');
});

router.get('/ue', function(req, res, next) {
    res.render('userEdit');
});
router.get('/uli', function(req, res, next) {
    res.render('userList');
});
router.get('/uc', function(req, res, next) {
    res.render('userCreate');
});

router.get('/ct', function(req, res, next) {
    res.render('clueTrack',{
        customer:'周杰伦',
        phone:'130111',
        clue: 'baidu',
        createtime: '2019/04/01 12:00:00'
    });
});
router.get('/cli', function(req, res, next) {
    res.render('clueList');
});

module.exports = router;
