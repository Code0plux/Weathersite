const apiKey="65b6e54bb72d508e4eaff28dd1238c1b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)//getting the data
    var data=await response.json(); //will have all the data
    if(response.status==404){
 document.querySelector(".error").style.display="block";
 document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.deg+" KM/H";
    console.log(data) 
    if(data.weather[0].main=='Clouds') {
         weatherIcon.src="images/clouds.png"
    } 
    else if(data.weather[0].main=='Clear') {
        weatherIcon.src="images/clear.png"
    } 
    else if(data.weather[0].main=='Rain') {
        weatherIcon.src="images/rain.png"
    } 
    else if(data.weather[0].main=='Drizzle') {
        weatherIcon.src="images/drizzle.png"
    } 
    else if(data.weather[0].main=='Mist') {
        weatherIcon.src="images/mist.png"
    } 
    else if(data.weather[0].main=='Thunderstorm') {
        weatherIcon.src="images/thunderstorm.png"
    } 
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

