var button = document.querySelector('.button')
var inputValue = document.querySelector('.SubmitValue')
var name = document.querySelector('.name');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('api.openweathermap.org/data/2.5/weather?q='+SubmitValue.value+'&appid=658dcff769c91d18bc57ff4058fbdd7f')

    .then(response => response.json())
    .then(data => console.log(data) )

    .catch (err => alert("Wrong City Name"))

})