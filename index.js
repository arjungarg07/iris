const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(bodyParser.json());
app.use(cors());

const port = 8000||process.env.PORT;
// app.engine('html', require('ejs').renderFile);
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get("/",(req,res)=>{
    res.render("./views/index.html");
});

app.get("/blog",(req,res)=>{
    res.render("http://localhost:8000/posthere.html");
});


app.listen(port,()=>{
    console.log(`Rocking on http://localhost:${port}`);
})