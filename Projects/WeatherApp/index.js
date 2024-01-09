import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "http://api.weatherstack.com/current";
const apiKey = "96dbdf9b4949e42c69a5aeb578116e26";

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL, { 
        params: {
            access_key: apiKey, 
            query: "Toronto"
        } 
    });
    res.render("index.ejs", { name: result.data.location.name, temp: result.data.current.temperature, country: result.data.location.country, desc: result.data.current.weather_descriptions });
  } catch (error) {
    res.render("index.ejs", { content: (error.message) });
  }
});

app.post("/submit", async (req, res) => {
  const city = req.body.city;
  
  try {
    const result = await axios.get(API_URL, { 
        params: {
            access_key: apiKey, 
            query: city
        } 
    });
    res.render("index.ejs", { name: result.data.location.name, temp: result.data.current.temperature, country: result.data.location.country, desc: result.data.current.weather_descriptions });
  } catch (error) {
    res.render("index.ejs", { content: (error.message) });
  }
});

app.listen(3000, function() {
    console.log("server started on port 3000");
});
