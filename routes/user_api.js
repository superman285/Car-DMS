const express = require('express');
const router = express.Router();
let {login, allUser, getUser, createUser, editUser, delUser} = require('../controllers/user');
const {decrypt} = require('../utils/crypto_token');


router.post('/login', async (req, res, next) => {
    let params = req.body;
    let result = await login(params);
    if (result) {
        res.cookie("phone", result[0], {maxAge: 1800000, httpOnly: true});
        res.cookie("password", result[1], {maxAge: 1800000, httpOnly: true});
        res.cookie("id", result[2], {maxAge: 1800000, httpOnly: true});
        res.cookie("name", result[3], {maxAge: 1800000, httpOnly: true});
        res.cookie("role", result[4], {maxAge: 1800000, httpOnly: true});

        let [srcPhone, srcPwd, srcID, name, role] = [decrypt(String(result[0])), decrypt(String(result[1])), decrypt(String(result[2])), result[3], result[4]];

        res.locals = {
            phone: srcPhone,
            password: srcPwd,
            id: srcID,
            name,
            role
        };
    }

    res.send({
        status: 0,
        result
    });
});


router.get('/all', async (req, res, next) => {
    let result = await allUser();
    res.send({
        status: 0,
        result
    });
});

router.get('/get', async (req, res, next) => {
    let params1 = req.body.params;
    let params2 = req.query;

    let result = await getUser(params2);
    res.send({
        status: 0,
        result
    });
});

router.post('/create', async (req, res, next) => {
    let params = req.body;
    let result = await createUser(params);
    res.send({
        status: 0,
        result
    });

});

router.post('/edit', async (req, res, next) => {

    let {id, params} = req.body;
    var result = await editUser(Number(id), params);
    console.log('editRes', result);

    res.send({
        status: 0,
        result
    });

});

router.post('/del', async (req, res, next) => {

    let id = Number(req.body.id);
    let result = await delUser(id);
    res.send({
        status: 0,
        result
    });


});


module.exports = router;