
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server running on port 3000")
});

//addition calculator
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    var result = num1+num2;
    
    res.send("The result of calculator is "+result);
})

//bmi calculator
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    let weight = Number(req.body.w);
    let height = Number(req.body.h);

    var result = weight/Math.pow(height,2);
    
    res.send("Your BMI is "+result);
})