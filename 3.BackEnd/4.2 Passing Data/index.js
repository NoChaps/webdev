import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.title = "Enter your name here:";
    next();
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const totalLength = req.body.fName.length + req.body.lName.length;
  res.render("index.ejs", {numberOfLetters: totalLength});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
