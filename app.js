const input=document.querySelector('#inputSearch')
const show=document.querySelector('#show')
const city=document.getElementById('city')
const temp=document.getElementById('temp')
const weather=document.getElementById('weather')
const wind=document.getElementById('wind')
const humidity=document.getElementById('humidity')
const img=document.getElementById('img')


const _url='https://api.openweathermap.org/data/2.5/weather?q='
const apiKey='f631ea87daddf959f8d7a12c30009e4c'
const imgUrl='https://openweathermap.org/img/wn/'

console.log(_url+'Bishkek'+'&appid='+apiKey);

async function getWeather(name='Dubai'){
    const res=await fetch(_url+name+'&appid='+apiKey)
    if (!res.ok) {
        alert('Такого города нет');
        return;
    }
    const data=await res.json()
    console.log(data);
    renderInfo(data)
}

getWeather()

show.onclick=()=>{
    getWeather(input.value)
}

function renderInfo(obj){
    city.innerHTML=obj.name
    temp.innerText=`${Math.round(obj.main.temp-273.15)}°C`
    weather.innerText=obj.weather[0].main
    wind.innerText=`Wind: ${obj.wind.speed}km/h`
    humidity.innerText=`Humidity: ${obj.main.humidity}%`
    img.src=`${imgUrl+obj.weather[0].icon}@2x.png`
}

