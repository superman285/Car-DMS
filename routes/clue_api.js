const express = require('express');
const router = express.Router();
let {allClue,getClue,createClue,editClue,delClue,getSaler} = require('../controllers/clue');


router.get('/all', async (req, res, next)=> {
    let result = await allClue();
    console.log('clueapi',result);

    res.send({
        status: 0,
        result
    });
});

router.get('/get', async(req, res, next)=> {
    let params = req.query;
    let result = await getClue(params);
    res.send({
        status: 0,
        result
    });
});

router.post('/create',async (req,res,next)=>{
    let params = req.body;
    console.log('params',params);

    let result = await createClue(params);
    console.log('res',result);

    res.send({
        status:0,
        result
    });

});

router.post('/edit',async (req,res,next)=>{

    let {id,params} = req.body;

    try {
        var result = await editClue(Number(id),params);
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

    let result = await delClue(id);
    console.log('delresult',result);

    res.send({
        status:0,
        result
    });


});




module.exports = router;