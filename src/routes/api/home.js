const router = require("express").Router();
router.get("/",(req,res)=>{
    res.render("home.html");
});

module.exports  = router;