var express = require('express');
var router = express.Router();
const axios = require('axios');

//middleware
var checkLogin = (req,res,next)=>{
    if (req.cookies.name) {
        console.log('有名字了，可以继续');
        next();
    }else {
        console.log('没有名字',req.cookies);
        res.redirect('bl')
    }
};


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

router.get('/logout',function(req, res, next) {

    //清除cookie
    res.clearCookie('phone');
    res.clearCookie('password');
    res.clearCookie('id');
    res.clearCookie('name');

    res.redirect('/bl');
});

router.get('/bl',function(req, res, next) {


    console.log('试试打印cookie',req.cookies);

    if (req.cookies.name) {
        var opt = {
            login: true,
            username: req.cookies.name,
        }
        res.redirect('/cli');
    }else {
        var opt = {
            login: false
        }
        res.render('backLogin.njk',opt);
    }

});

router.get('/ul', function(req, res, next) {
    res.render('user_layout');
});
router.get('/cl', function(req, res, next) {
    res.render('clue_layout');
});

router.get('/ue',async function(req, res, next) {
    let userid = req.query.id;
    console.log('userid',userid);

    try {
        let getRes = await axios({
            method: 'GET',
            url:'http://localhost:3000/user/get',
            params: {
                id: userid,
            }
        });
        var {name,phone,password,role} = getRes.data.result[0];
        console.log('getresult',getRes.data.result[0]);
    } catch (err) {
        console.log('err',err);
    }
    res.render('userEdit',{
        name,
        phone,
        password,
        role
    });
});

router.get('/uli',checkLogin,function(req, res, next) {
    res.render('userList',{
        login: true,
        username: req.cookies.name,
    });
});
router.get('/cli',checkLogin,async function(req, res, next) {

    let allRes = await axios({
        method: 'GET',
        url:'http://localhost:3000/clue/all',
    });
    console.log('allclue',allRes.data.result);
    /*let alluserRes = await axios({
        method: 'GET',
        url
    })*/

    let items = allRes.data.result? allRes.data.result:[];

    console.log('items',items);
    
    res.render('clueList',{
        login: true,
        username: req.cookies.name,
        items
    });
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


module.exports = router;
