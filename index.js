const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const article = require("./server/models/article.js");

app.use(bodyParser.json());
app.use(cors());

require("./db.js");
require("./server/models/article")

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

app.get("/adminpanel",(req,res)=>{
    res.render("adminpanel.html");
});

app.get('/adminlogin',(req,res)=>{
    res.render("adminlogin.html");
})
app.post('/postform',async (req,res)=>{
    try{

    }catch(err){
        console.log()
    }
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
})

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

app.listen(port,()=>{
    console.log(`Rocking on http://localhost:${port}`);
})