var inputvalue =document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city= document.querySelector('#cityoutput')
var description = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind= document.querySelector('#wind')
apik = "b412b75b6b036707d0641d723058c7b3"
function convertion(val)
{
    return (val-273).toFixed(3)
}
btn.addEventListener('click', function()

{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputvalue.value+ '&appid='+apik)
    .then(res => res.json())
    .then(data => 
        {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var wndspeed = data['wind']['speed']
        city.innerHTML = ` <span>${nameval}<span>`
        temp.innerHTML = ` <span>${convertion(temperature)} C</span>`
        description.innerHTML = `Sky Condition: <span>${descrip}</span>`
        wind.innerHTML = `Wind Speed: <span>${wndspeed}km/h</span>`
       })
       .catch(err => alert('You entered wrong city name'))
    })
    