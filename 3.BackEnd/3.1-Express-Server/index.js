import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HEllo world!");
});

app.get("/contact", (req, res) => {
  res.send("Contact pagenodemo");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
