const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require('passport'),LocalStrategy = require('passport-local').Strategy;
const flash=require("connect-flash");

/////////////////////////////////////////////////
const article = require("./server/models/article.js");
const User = require("./server/models/user.js");

// const {article} = require("./server/models/article");

app.use(flash());
app.use(bodyParser.json());
app.use(cors());
app.use(require('cookie-parser')());
// app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     user.findById(id, function (err, user) {
//         done(err, user);
//     });
// });

require("./db.js");
// require("./server/models/article")

const port = 8000||process.env.PORT;

app.use('/', express.static(path.join(__dirname, 'public')));


app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get("/",(req,res)=>{
    res.render("home.html");
});

app.get("/blog",(req,res)=>{
    res.render("blog.html");
});
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
app.get("/adminpanel",(req,res)=>{
    res.render("adminpanel.html");
});

app.get('/adminlogin',(req,res)=>{
    res.render("adminlogin.html");
})
app.post('/postform',async (req,res)=>{
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

console.log("printing saved data"); 
// article.deleteMany(function (err, articles) {
//     if (err) return console.error(err);
//     console.log(articles);
// }) 
// mongoose.deleteModel('article');
app.get('/content',async (req,res)=>{
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

// ========================
// ======Authentication====
//=========================

// passport.use(new LocalStrategy({
//     passReqToCallback : true
// },function(username, password, done) {
//     user.findOne({ username: username }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//             return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.password(password)) {
//             return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//     });
// }
// ));
passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log("dssdsd");
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

app.post('/login',
passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/adminlogin',
                                   failureFlash: true })
);

app.listen(port,()=>{
    console.log(`Rocking on http://localhost:${port}`);
})