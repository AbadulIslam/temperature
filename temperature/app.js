

document.getElementById('searchButton').addEventListener('click',function(){
    const api_keys='ef6440c6d1bc4b7a3c11e76e384758f0';

    const userData=document.getElementById('input_data').value;
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${userData}&appid=${api_keys}&units=metric`;
fetch(api_url)
.then(res=>res.json())
.then(data=>{
const location=data.name;
document.getElementById('dynamicLocation').innerText=location;

const Dynamictemp=data.main.temp;
document.getElementById('dynamicTempture').innerText=Dynamictemp;

const tempStatus=data.weather[0].main;
document.getElementById('tempStatus').innerText=tempStatus;
 
const icon=data.weather[0].icon;
const iconUrl=`http://openweathermap.org/img/wn/${icon}@2x.png`;
document.getElementById('dynamicIcon').src=iconUrl;




})





})