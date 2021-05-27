var button = document.querySelector('.button')
var inputValue = document.querySelector('.SubmitValue')
var name = document.querySelector('.name');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('api.openweathermap.org/data/2.5/weather?q='+SubmitValue.value+'&appid=REDACTED_OPENWEATHER_KEY')

    .then(response => response.json())
    .then(data => console.log(data) )

    .catch (err => alert("Wrong City Name"))

})