var express = require('express');
var router = express.Router();
const axios = require('axios');

//verify middleware
//login
var checkLogin = (req, res, next) => {
    if (req.cookies.name) {
        console.log('有名字了，可以继续');
        next();
    } else {
        console.log('没有名字', req.cookies);
        res.redirect('bl')
    }
};
//role permission
var checkPermission = (req,res,next)=>{
    if (req.cookies.role==="管理员"){
        next();
    }else {
        res.redirect('forbid');
    }
};

router.get('/forbid',(req,res,next)=>{
    res.render('forbidden');
});

/* GET landing page. */
router.get('/', function (req, res, next) {
    res.render('landing');
});
router.get('/landing', function (req, res, next) {
    res.render('landing');
});

//use with a tag
router.get('/logout', function (req, res, next) {
    //清除cookie
    res.clearCookie('phone');
    res.clearCookie('password');
    res.clearCookie('id');
    res.clearCookie('name');
    res.redirect('/bl');
});

router.get('/bl', function (req, res, next) {
    if (req.cookies.name) {
        var opt = {
            login: true,
            username: req.cookies.name,
        }
        res.redirect('/cli');
    } else {
        var opt = {
            login: false
        }
        res.render('backLogin.njk', opt);
    }
});

router.get('/uli', checkLogin, async function (req, res, next) {
    res.render('userList', {
        login: true,
        username: req.cookies.name,
    });
});
router.get('/cli', checkLogin, async function (req, res, next) {
    let allRes = await axios({
        method: 'GET',
        url: 'http://localhost:3000/clue/all',
    });
    let items = allRes.data.result ? allRes.data.result : [];

    res.render('clueList', {
        login: true,
        username: req.cookies.name,
        items
    });
});

router.get('/uc', checkLogin,checkPermission,function (req, res, next) {
    res.render('userCreate',{
        login: true,
        username: req.cookies.name,
    });
});

router.get('/ue',checkLogin,checkPermission,async function (req, res, next) {
    let userid = req.query.id;
    let getRes = await axios({
        method: 'GET',
        url: 'http://localhost:3000/user/get',
        params: {
            id: userid,
        }
    });
    var {name, phone, password, role} = getRes.data.result[0];
    res.render('userEdit', {
        login: true,
        username: req.cookies.name,
        name,
        phone,
        password,
        role
    });
});

router.get('/ct', checkLogin,async function (req, res, next) {

    let clueid = req.query.id;
    let getRes = await axios({
        method: 'GET',
        url: 'http://localhost:3000/clue/get',
        params: {
            id: clueid,
        }
    });
    var {name, phone, utm, created_time, status, remark, saler} = getRes.data.result[0];

    let salersRes = await axios({
        method: 'GET',
        url: 'http://localhost:3000/user/get',
        params: {
            role: '销售',
        }
    });
    let salersList = salersRes.data.result;

    let logsRes = await axios({
        method: 'GET',
        url: 'http://localhost:3000/cluelog/get',
        params: {
            clue_id: clueid
        }
    });

    let logs = logsRes.data.result;

    let permission = req.cookies.role==='管理员';

    res.render('clueTrack', {
        login: true,
        username: req.cookies.name,
        permission,
        name,
        phone,
        utm,
        created_time,
        status,
        remark,
        saler,
        salersList,
        logs
    });
});


module.exports = router;
