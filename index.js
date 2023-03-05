const express = require('express');
const bodyParser = require('body-parser');  // body-parser is to get user input
const { request, response } = require('express');
const app = express();     //this will put new express application inside app var
app.use(bodyParser.urlencoded({extended: true})); // for form we use urlencoded.

app.get("/",(request,response)=>{
    response.sendFile(__dirname + "/numberCalculator.html");
    // console.log("File is getting");
});

app.post("/", (request,response)=>{
    // console.log(req.body);
    var num1= Number(request.body.num1);  
    var num2= Number(request.body.num2);
    var addn= num1+num2;
    response.send(`The answer for addition of ${num1} and ${num2} is ${addn}`);  
    // console.log("raj");
});

app.get("/BMI", (request,response)=>{
    response.sendFile(__dirname + "/BMICalculator.html");
})

app.post("/BMI",(request,response)=>{
    console.log(request.body);
    var weight= Number(request.body.weight);
    var height= (Number(request.body.height))**2;
    var BMI= weight/height;
    response.send(`BMI for weight ${weight} and height ${height} will be ${BMI}`)
})

app.listen(3000, ()=>{      //this will make server
    // console.log("Server Is Started");
});