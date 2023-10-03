import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let todaysItems = [];
let workItems = [];

app.use((req, res, next) => {
    res.locals.todaysItems = todaysItems;
    next();
});

app.use((req, res, next) => {
    res.locals.workItems = workItems;
    next();
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/work", (req, res) => {
  res.render("work.ejs");
});

app.post("/", (req, res) => {
  if(req.body.newItem) {
    todaysItems.push(req.body.newItem);
    res.render("index.ejs", {todaysItems: todaysItems});
  }
  else {
    res.redirect("/");
  }
});

app.post("/work", (req, res) => {
  if(req.body.newWorkItem) {
    workItems.push(req.body.newWorkItem);
    res.render("work.ejs", {workItems: workItems});
  }
  else {
    res.redirect("/work");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});