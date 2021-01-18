
const express = require("express");
const bodyParser = require("body-parser");
//require module
const date = require(__dirname+"/date.js");

const app = express();

const items = [];
const workItems = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", { listTitle: day, item: items });

});

app.post("/", function(req, res){
    
    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item)
        res.redirect("/");
    }

  
    
})


app.get("/work", (req,res) => {
    res.render("list", {listTitle: "Work", item: workItems});
})

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item)
    res.redirect("/work");
})

app.get("/about", (req, res)=>{
    res.render("about");
})



app.listen(4000, function () {
    console.log("server running on 3000");
})