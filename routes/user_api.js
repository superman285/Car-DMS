const express = require('express');
const router = express.Router();
let {login,allUser,getUser,createUser,editUser,delUser} = require('../controllers/user');
const {decrypt} = require('../utils/crypto_token');



router.post('/login', async(req, res, next)=> {
    let params = req.body;
    let result = await login(params);
    console.log('加密phone,pwd,id|name',result);

    if (result) {
        res.cookie("phone",result[0],{maxAge: 1800000, httpOnly: true});
        res.cookie("password",result[1],{maxAge: 1800000, httpOnly: true});
        res.cookie("id",result[2],{maxAge: 1800000, httpOnly: true});
        res.cookie("name",result[3],{maxAge: 1800000, httpOnly: true});
        res.cookie("role",result[4],{maxAge: 1800000, httpOnly: true});

        let [srcPhone,srcPwd,srcID,name,role] = [decrypt(String(result[0])),decrypt(String(result[1])),decrypt(String(result[2])),result[3],result[4]];

        res.locals = {
            phone:srcPhone,
            password: srcPwd,
            id: srcID,
            name,
            role
        };

        console.log('reslocals',res.locals);
    }

    res.send({
        status: 0,
        result
    });
});


router.get('/all', async (req, res, next)=> {
    let result = await allUser();
    console.log('result',result);
    res.send({
        status: 0,
        result
    });
});

router.get('/get', async(req, res, next)=> {
    let params1 = req.body.params;
    let params2 = req.query;

    let result = await getUser(params2);
    console.log(result);
    res.send({
        status: 0,
        result
    });
});

router.post('/create',async (req,res,next)=>{
    let params = req.body;
    console.log(params);

    let result = await createUser(params);
    console.log(result);

    res.send({
        status:0,
        result
    });

});

router.post('/edit',async (req,res,next)=>{

    let {id,params} = req.body;

    try {
        var result = await editUser(Number(id),params);
        console.log('editRes',result);
    } catch (err) {
        console.log('editErr',err);
    }

    res.send({
        status:0,
        result
    });

});

router.post('/del',async (req,res,next)=>{

    let id = Number(req.body.id);

    let result = await delUser(id);
    console.log('delresult',result);

    res.send({
        status:0,
        result
    });


});




module.exports = router;