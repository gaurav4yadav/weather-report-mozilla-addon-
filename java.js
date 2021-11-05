window.onload = async function(){
    document.getElementById("button1").onclick=async function(){
      //  console.log("here ");
      var input = document.getElementById("city").value;
      var getttt="http://api.weatherapi.com/v1/current.json?key=87a032acb853430789c162918210211&q="+input;
  
      




const response= await fetch(getttt);
const data= await response.json();

var  output  =  document.getElementById("p1"); output.innerHTML  =  data.location.name;
var  output  =  document.getElementById("country"); output.innerHTML  =  data.location.country;
var  output  =  document.getElementById("time"); output.innerHTML  =  data.location.localtime;

var  output  =  document.getElementById("weather"); output.innerHTML  =  data.current.condition.text;
var  output  =  document.getElementById("temp"); output.innerHTML  =  data.current.temp_c;
var  output  =  document.getElementById("humidity"); output.innerHTML  =  data.current.humidity;
var  output  =  document.getElementById("feellike"); output.innerHTML  =  data.current.feelslike_c;
var  output  =  document.getElementById("cloud"); output.innerHTML  =  data.current.cloud;
console.log(data.location.country);










    //   fetch(getttt, {
    // })
    // .then(response => {
    //     console.log(response);
    //     return response.text();
    // })
    // .then((data)=>{
    //     console.log(data);
    //     //document.getElementById("dataElement").innerHTML = data;
    //     var  output  =  document.getElementById("p1"); output.innerHTML  =  data.location.name;
    //     console.log(data.location.name);
    // }
    // )
    
    // .catch(err => {
    //     console.error(err);
    // });

      
    }
}
