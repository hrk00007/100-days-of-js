const api ={
    base:"https://api.openweathermap.org/data/2.5/", 
    key:"a0b0df754cb194be1b275c24611dcb64"
}
/* 
const search=document.querySelector('.search');
const btn=document.querySelector('.btn');
btn.addEventListener('click',getInput);

function getInput(event){
    event.preventDefault();
    // if(event.type=='click'){
        getData(search.value);
    // }
}

function getData(city){
    fetch(`${api.base}weather?q=${city}
    &units=metric&appid=${api.key}`)
    .then(response=>{
        return response.json();
    }).then(displayData);
}
//EX-URL: https://api.openweathermap.org/data/2.5/weather?q=Nagpur&units=metric&appid=a0b0df754cb194be1b275c24611dcb64

function displayData(response){
    console.log(response);
    if(response.cod==="404"){
        const error=document.querySelector('.error');
        error.textContent ="Please enter a valid city";
        search.value=" ";
    }else{
        const error=document.querySelector('.error');
        error.textContent =" ";
        const city=document.querySelector('.city');
        city.innerText=`${response.name}, ${response.sys.country}`;

        const today=new Date();
        const date=document.querySelector('.date');
        date.innerText=dateFunction(today);

        const temp=document.querySelector('.temp');
        temp.innerHTML=`Temp:${Math.round(response.main.temp)}<span>°C</span>`;

        const weather=document.querySelector('.weather');
        weather.innerHTML=`${response.weather[0].main}`;

        const range=document.querySelector('.temp-range')
        range.innerHTML=`Temp Range: ${Math.round(response.main.temp_min)}°C
                        /${Math.round(response.main.temp_max)}°C`;

        const icon=document.querySelector('.weather-icon');  
        const iconUrl="https://openweathermap.org/img/w/";
        icon.src=iconUrl+response.weather[0].icon+".png";     
        //EX URL: https://openweathermap.org/img/w/50d.png         
    }
    
}

function dateFunction(d){
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    let day=days[d.getDay()]; 
    let date=d.getDate(); 
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day},${date} ${month} ${year}`;
} */

const search=document.querySelector('.search');
const btn=document.querySelector(".btn");

btn.addEventListener('click',getInput);

function getInput(e){
    e.preventDefault();
    getData(search.value);
}

function getData(city){
    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
    .then(response=>{
        return response.json();
    })
    .then(displayData);
}

function displayData(response){
    console.log(response);
    if(response.cod==="404"){
        const error=document.querySelector('.error');
        error.textContent="Please Enter a valid city name";
    }else{
        const error=document.querySelector('.error');
        error.textContent="";

        const city=document.querySelector('.city');
        city.innerHTML=`${response.name},${response.sys.country}`;

        const today= new Date();
        const date=document.querySelector(".date");
        date.innerHTML=dateFunction(today);

        const temp=document.querySelector(".temp");
        temp.innerHTML=`Temp: ${Math.round(response.main.temp)}°C`;

        const weather=document.querySelector(".weather");
        weather.innerHTML=`${response.weather[0].main}`;

        const range=document.querySelector(".temp-range");
        range.innerHTML=`Temp Range: ${Math.round(response.main.temp_min)}°C/${Math.round(response.main.temp_max)}°C`;
    
        const icon=document.querySelector(".weather-icon");
        const iconUrl="https://openweathermap.org/img/w/";
        icon.src=iconUrl+response.weather[0].icon+".png";  
        //EX URL: https://openweathermap.org/img/w/50d.png       
    }
}

function dateFunction(d){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day},${date} ${month} ${year}`;
}
