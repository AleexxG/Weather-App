const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
require("dotenv").config();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const sendData = {location: "None", temp: "N/A", disc: "None", press: "N/A", wind: "N/A", humid: "N/A"}
    res.render("index", {sendData: sendData});
});

app.post("/", async (req, res) => {
    try {
        let location =  await req.body.city;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=metric`;
        const response = await fetch(url);
        const weatherData = await response.json();
        
        const temp = Math.floor(weatherData.main.temp);
        const disc = weatherData.weather[0].description;
        const press = weatherData.main.pressure;
        const wind = weatherData.wind.speed;
        const humid = weatherData.main.humidity;

        const sendData = {};
        sendData.location = location;
        sendData.temp = temp;
        sendData.disc = disc;
        sendData.press = press;
        sendData.wind = wind;
        sendData.humid = humid;
        res.render("index", {sendData: sendData});
    } catch (error) {
        console.log(error);
        res.status(400).json({data: "Not Found!"})
    }
});

app.listen(3000, () => {
    console.log("Server is runnung...");
});