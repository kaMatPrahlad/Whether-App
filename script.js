const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2e9e44f5a7msha31c6f17abc8598p15a6d9jsnd58f7133d15e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const GetWeather = (City)=>{
	CityName.innerHTML = City
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + City, options)
	.then(response => response.json())
	.then((response) => {


console.log(response)
//cloud_pct.innerHTML = response.cloud_pct
temp.innerHTML = response.temp
temp2.innerHTML = response.temp
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response. humidity
humidity2.innerHTML = response. humidity
min_temp.innerHTML= response.min_temp
max_temp.innerHTML = response.max_temp
wind_speed.innerHTML = response.wind_speed
wind_speed2.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise 
sunset.innerHTML = response.sunset
   
    
    })
	.catch(err => console.error(err));
}

 submit.addEventListener("click", (e)=>{
	GetWeather(City.value)
	
})
GetWeather("Delhi")
