const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
require("dotenv").config();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", async (req, res) => {
    let location =  await req.body.city;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=metric`;
    const response = await fetch(url);
    const weatherData = await response.json();
    
    const temp = Math.floor(weatherData.main.temp);
    const disc = weatherData.weather[0].description;
    const press = weatherData.main.pressure;
    const wind = weatherData.wind.speed;
    const humid = weatherData.main.humidity;
});

app.listen(3000, () => {
    console.log("Server is runnung...");
});