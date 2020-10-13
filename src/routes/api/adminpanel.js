const router = require('express').Router();

router.get("/adminpanel",(req,res)=>{
    res.render("adminpanel.html");
});

module.exports = router;