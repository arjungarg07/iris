const router = require("express").Router();
const User = require("../../../server/models/user");
const passport = require('passport'),LocalStrategy = require('passport-local').Strategy;
require("../../../db.js");

// const myone = "arjungarg07";
// const mypass = "admin";
// const data = new User({
//     username : myone,
//     password : mypass
// })
// data.save((err)=>{
//     if(err) console.log(err);
// });
// User.findOne(function (err, data) {
//     // if (err) return res.json({ status: 0, msg: 'something went wrong' });
//     // res.send({ status: 1,msg: 'arbitary article successfully fetched', data });
//     console.log(data);
// });

passport.use(new LocalStrategy(
    function (username, password, done) {
        // console.log("dssdsd");
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!(user.password === password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

router.get('/login',(req,res)=>{
    res.render("login.html");
})

router.post('/login',
passport.authenticate('local', { successRedirect: '/adminpanel',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

module.exports = router;

