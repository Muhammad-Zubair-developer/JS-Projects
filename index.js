const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweather.org/data/2.5/weather?q=berlin&appid&units=matrics&q=";

const searchBox = document.querySelector(".search input");
const btn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    
    document.querySelector(".temp").innerHTML = Math.round(data.main.Temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

btn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();