let bgImg = document.querySelector(".body");
let icon = document.querySelector(".icon").src;

if (icon === "http://openweathermap.org/img/wn/01d@2x.png") {
    bgImg.style.backgroundImage = "url('./img/clearSkyD.jpg')"
} 
else if (icon === "http://openweathermap.org/img/wn/01n@2x.png") {
    bgImg.style.backgroundImage = "url('./img/clearSkyN.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/02d@2x.png" || "http://openweathermap.org/img/wn/03d@2x.png") {
    bgImg.style.backgroundImage = "url('./img/fewCloudsD.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/02n@2x.png" || "http://openweathermap.org/img/wn/03n@2x.png") {
    bgImg.style.backgroundImage = "url('./img/fewCloudsN.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/04d@2x.png") {
    bgImg.style.backgroundImage = "url('./img/brokenCloudsD.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/04n@2x.png") {
    bgImg.style.backgroundImage = "url('./img/brokenCloudsN.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/09d@2x.png" || "http://openweathermap.org/img/wn/10d@2x.png") {
    bgImg.style.backgroundImage = "url('./img/rainD.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/09n@2x.png" || "http://openweathermap.org/img/wn/10n@2x.png") {
    bgImg.style.backgroundImage = "url('./img/rainN.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/11d@2x.png") {
    bgImg.style.backgroundImage = "url('./img/thunderstormD.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/11n@2x.png") {
    bgImg.style.backgroundImage = "url('./img/thunderstormN.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/13d@2x.png" || "http://openweathermap.org/img/wn/13n@2x.png") {
    bgImg.style.backgroundImage = "url('./img/snow.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/50d@2x.png") {
    bgImg.style.backgroundImage = "url('./img/mistD.jpg')"
}
else if (icon === "http://openweathermap.org/img/wn/50n@2x.png") {
    bgImg.style.backgroundImage = "url('./img/mistN.jpg')"
}