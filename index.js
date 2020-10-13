const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require('passport'),LocalStrategy = require('passport-local').Strategy;
const flash=require("connect-flash");

app.use(flash());
app.use(bodyParser.json());
app.use(cors());
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/',require("./src/routes"));
app.use('/', express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

require("./db.js");

const port = 8000||process.env.PORT;

// console.log("printing saved data"); 
// article.deleteMany(function (err, articles) {
//     if (err) return console.error(err);
//     console.log(articles);
// }) 
// mongoose.deleteModel('article');

app.listen(port,()=>{
    console.log(`Rocking on http://localhost:${port}`);
})