function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=658dcff769c91d18bc57ff4058fbdd7f&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = Math.round(data['main']['temp']);
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];


  main.innerHTML = nameValue;
  desc.innerHTML = ""+descValue;
  temp.innerHTML = +tempValue+"°C";
  input.value ="";

})


// catch error if wrong city entered. <<<<

.catch(err => alert("Wrong city name!"));
})

// >>>>  Enter Key submission code  <<<<<<

var input =  document.getElementById("myinput");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("mybtn").click();
  }
});

// END of Enter key Code


// TOGGLE DARK MODE CODE //

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => 
{
  document.body.classList.toggle('dark');
});



// Form Submit

function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}



        
  