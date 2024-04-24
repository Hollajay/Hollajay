
let humidityPercent = document.getElementById("humidityPercent")
let airQuality = document.getElementById("airQuality")
let UVindex = document.getElementById("index")
let temperaturePercent = document.getElementById("temperaturePercent")
let temperatureIcon = document.getElementById("temperatureIcon")
let detailsBtn = document.getElementById("detailsBtn")
let container1 = document.getElementById("container1")
let container2 = document.getElementById("container2")
let currentLocation = document.getElementById("currentLocation")
let dateTime = document.getElementById("timingClock")
let weatherCondition = document.getElementById("weatherCondition")
let search = document.getElementById("search")
let searchBtn = document.querySelector(".search-btn")
let form = document.querySelector(".search-bar")




let humidityPercent2 = document.getElementById("humidityPercent2")
let airQuality2= document.getElementById("airQuality2")
let UVindex2= document.getElementById("index2")
let temperaturePercent2 = document.getElementById("temperaturePercent2")
let temperatureIcon2= document.getElementById("temperatureIcon2")
let currentLocation2 = document.getElementById("currentLocation2")
let dateTime2 = document.getElementById("timingClock2")
let weatherCondition2 = document.getElementById("weatherCondition2")

let temperatureIcon3= document.getElementById("temperatureIcon3")
let currentLocation3 = document.getElementById("currentLocation3")
let cloud3 = document.getElementById("cloud3")
let cloud4= document.getElementById("cloud4")
let weekDay = document.getElementById("weekday")
let currentLocation4 = document.getElementById("currentLocation4")

detailsBtn.addEventListener("click" ,()=> {
   container2.style.display = "block"
     container1.style.display = "none"

})





function convertTimeStamp(timestamp, timezone) {
   const convertTimezone = timezone / 3600;
   const date = new Date(timestamp * 1000)
   const options = {
       hour: "numeric",
       minute: "numeric",
       timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
       hour12: true,
   }
   return date.toLocaleString('en-US', options);
}

function convertWeekDay(timestamp, timezone) {
   const convertTimezone = timezone / 3600;
   const date = new Date(timestamp * 1000)
   const options = {
      weekday:"long",
     
       timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
       hour12: true,
   }
   return date.toLocaleString('en-US', options);
}




 function convertCountryCode(country){
   let regionNames = new Intl.DisplayNames(["en"],{type:"region"})
   return regionNames.of(country)
 }

form.addEventListener("submit", (e)=>{
   e.preventDefault()
      if(currentCity !== search.value){
         currentCity = search.value
      }
      return fetcher()
})

let  currentCity = "london"
let units = "metric"
const API_KEY = '50e011a9acc81ee3ed08622ff8255a25'

 function fetcher(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`)
.then(response => {
 return  response.json()})
.then(data =>{
   currentLocation.innerHTML = `${data.name},${convertCountryCode(data.sys.country)}`
    console.log(data)
    temperaturePercent.innerHTML = `${data.main.temp.toFixed()}&deg;c`
    humidityPercent.innerHTML = `${data.main.humidity}%`
    airQuality.innerHTML = `${data.wind.speed.toFixed()}m/s`
    UVindex.innerHTML = `${data.main.pressure.toFixed()} hpa`
    temperatureIcon.innerHTML = ` <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
    dateTime.innerHTML = convertTimeStamp(data.dt,data.timezone);
    weatherCondition.innerHTML = `${data.weather[0].description},${data.weather[0].main}.low ${data.main.temp.toFixed()}&deg;c. Winds SW 10 to 14 km/h `
   
   
    currentLocation3.innerHTML = `${data.name},<br>${convertCountryCode(data.sys.country)}`
    temperatureIcon3.innerHTML = ` <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
    cloud3.innerHTML = `${data.weather[0].description}`
    weekDay.innerHTML = convertWeekDay(data.dt,data.timezone)
     cloud4.innerHTML = `${data.weather[0].main}`

    currentLocation2.innerHTML = `${data.name}<br>${convertCountryCode(data.sys.country)}`
    temperaturePercent2.innerHTML = `${data.main.temp.toFixed()}&deg;c`
    humidityPercent2.innerHTML = `${data.main.humidity}%`
    airQuality2.innerHTML = `${data.wind.speed.toFixed()}m/s`
    UVindex2.innerHTML = `${data.main.pressure.toFixed()} hpa`
    temperatureIcon2.innerHTML = ` <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
    dateTime2.innerHTML = convertTimeStamp(data.dt,data.timezone);
    weatherCondition2.innerHTML = `${data.weather[0].description},${data.weather[0].main}.low ${data.main.temp.toFixed()}&deg;c. Winds SW 10 to 14 km/h `
   currentLocation4.innerHTML = `${data.name},${convertCountryCode(data.sys.country)}`
})
      
}
 fetcher()