const router = require('express').Router();
const article = require("../../../server/models/article");
require("../../../db.js");

router.post('/postblog',async (req,res)=>{
    try{
        const  {name,title,type,tags,content} = req.body;
        const data = new article({

            type_of   : type,
            title     : title,
            content   : content,
            user_name : name,
            created_at: Date.now(),
        })
        data.save((err)=>{
            if(err) console.log(err);
        });
        // console.log(name,title,type,tags,content); 
        res.send("req registered");
    }catch(err){
        console.log(err);
    }
});

module.exports = router;