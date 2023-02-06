const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4c7e19a6f4mshb128c28c2a7cd23p1e14c2jsn04604c3e5a1e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
temp.innerHTML = response.temp
wind_speed.innerHTML=response.wind_speed

not.innerHTML=city

    })
	.catch(err => console.error(err));



}


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery)

function setQuery (evt){
    if (evt.keyCode==13){

        getWeather(see.value)
    }
}




const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let day=days[d.getDay()];
 let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

const datee = document.getElementById('datee')

datee.innerHTML=dateBuilder(new Date())