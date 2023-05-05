const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/BMIcalculator.html");
});

app.post("/", function(req, res) {
    
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);

    let bmi = Math.round(weight/(Math.pow(height, 2)));
    if (bmi < 18.5) {
        return res.send("Your BMI is " + bmi +", so you are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return res.send("Your BMI is " + bmi +", so you have a normal weight.");
    }
    
    return res.send("Your BMI is " + bmi +", so you are overweight.");

});

// app.post("/", function(req, res) {
    
//     let num1 = Number(req.body.num1);
//     let num2 = Number(req.body.num2);

//     let result = num1 + num2;

//     res.send("The result of the calculation is " + result);
// });

app.listen(3000, function() {
    console.log("server started on port 3000");
});