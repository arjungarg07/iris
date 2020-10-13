const router = require("express").Router();
const article = require("../../../server/models/article");
require("../../../db.js");

router.get("/blog",(req,res)=>{
    res.render("blog.html");
});

router.get('/content',async (req,res)=>{
    try{
        article.findOne(function (err, data) {
            if (err) return res.json({ status: 0, msg: 'something went wrong' });
            res.send({ status: 1,msg: 'arbitary article successfully fetched', data });
        });
    }catch(err){
        console.log(err);
        res.json({ status: 0, msg: 'something went wrong' });
    }
})

module.exports = router;
