import express from "express";
<<<<<<< HEAD
=======
import morgan from "morgan";
>>>>>>> 3cd43ff9164394d17a40a680b7a875916a9f101a

const app = express();
const port = 3000;

<<<<<<< HEAD
=======
app.use(morgan("combined"));

>>>>>>> 3cd43ff9164394d17a40a680b7a875916a9f101a
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
