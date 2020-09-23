const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(bodyParser.json());
app.use(cors());

require("./db.js");

const port = 8000||process.env.PORT;

app.use('/', express.static(path.join(__dirname, 'public')))

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get("/",(req,res)=>{
    res.render("home.html");
});

app.get("/blog",(req,res)=>{
    res.render("blog.html");
});

app.get("/adminlogin",(req,res)=>{
    res.render("adminlogin.html");
});

app.post('/postform',(req,res)=>{
    const  {name,title,type,tags,content,} = req.body;
    console.log(name,title,type,tags,content);    

    res.send('Badiya Ladke');
})


app.listen(port,()=>{
    console.log(`Rocking on http://localhost:${port}`);
})