import express from "express";

const app = express();
const port = 3000;

const date = new Date();
let currentDay = date.getDay();

let day = "";
let adv = "";

if (currentDay <= 5 && currentDay >= 1) {
    day = "weekday";
    adv = "it is time to work"
}
else {
    day = "weekend";
    adv = "it is time to relax";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {dateType: day, advice: adv});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});