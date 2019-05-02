const express = require('express');
const router = express.Router();
let {allClueLog,getClueLog,createClueLog,editClueLog,delClueLog} = require('../controllers/cluelog.js');

router.get('/all', async (req, res, next)=> {
    let result = await allClueLog();
    res.send({
        status: 0,
        result
    });
});

router.get('/get', async(req, res, next)=> {
    let params = req.query;
    let result = await getClueLog(params);
    res.send({
        status: 0,
        result
    });
});

router.post('/create',async (req,res,next)=>{
    let params = req.body;
    let result = await createClueLog(params);
    res.send({
        status:0,
        result
    });

});

router.post('/edit',async (req,res,next)=>{

    let {id,params} = req.body;
        var result = await editClueLog(Number(id),params);
        console.log('editRes',result);
    res.send({
        status:0,
        result
    });

});

router.post('/del',async (req,res,next)=>{

    let id = Number(req.body.id);
    let result = await delClueLog(id);
    res.send({
        status:0,
        result
    });
});


module.exports = router;