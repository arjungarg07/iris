const router = require("express").Router();
const blog = require("./api/blog");
const home = require("./api/home");
const login = require("./api/login");
const postblog = require("./api/postblog");
const adminpanel = require("./api/adminpanel");

router.use('/',blog);
router.use('/',home);
router.use('/',login);
router.use('/',postblog);
router.use('/',adminpanel);

module.exports = router;
