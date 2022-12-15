const userLocation=document.querySelector(".location");
const btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition(showPostition)
    generateColor();
});

function showPostition(position){
    userLocation.innerHTML=`
    Latitude: ${position.coords.latitude}<br/><br/>
    Longitude: ${position.coords.longitude}`
    
}



const generateColor=()=>{
    const color=Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor="#"+color;
    hex.innerHTML="#"+color;
};

