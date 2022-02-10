let backgroundImages = document.querySelector("body");

let birthDayInput = document.getElementById("birthday");

let ageHeader = document.getElementsByTagName("h1")[0];

let counter = document.querySelector(".birthday--cal");

let selectBirthday = document.querySelector(".select--birthday");

let inputBirthday = document.getElementsByClassName("birthday")[0];

let loaderSpinner = document.getElementsByClassName("spinner")[0];


function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   };
 };


window.addEventListener ("load", ()=> {

     wait(1500);

    loaderSpinner.innerHTML = "<p><img src='./images/tick.png' alt='' height='60px'>READY</p>";
    loaderSpinner.style.marginLeft = '-15px';


});


birthDayInput.addEventListener ("click", () =>{

    backgroundImages.style.backgroundImage = "url('./images/key.jpg')";

    counter.style.color = "white";

    ageHeader.style.color = "white";

    selectBirthday.style.color = "white";

    inputBirthday.style.backgroundColor = "#b76d40";

});

let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const updateCountdown = () => {


  var bDay = new Date(`${inputBirthday.value}`).getTime();
  var today = new Date().getTime();
  var birthYear = today - bDay;
  var birthMonth = birthYear % (1000 * 60 * 60 * 24 * 365);
  var birthDay = birthMonth % (1000 * 60 * 60 * 24 *30);
  var birthHour = birthDay % (1000 * 60 * 60 * 24);
  var birthMinute = birthHour % (1000 * 60 * 60);
  var birthSecond = birthMinute % (1000 * 60);



  year.innerText = Math.floor(birthYear / (1000 * 60 * 60 * 24 * 365));
  month.innerText = Math.floor(birthMonth / (1000 * 60 * 60 * 24 * 30));
  day.innerText = Math.floor(birthDay / (1000 * 60 * 60 * 24));
  hour.innerText = Math.floor(birthHour / (1000 * 60 * 60));
  minute.innerText = Math.floor(birthMinute / (1000 * 60));
  second.innerText = Math.floor(birthSecond / (1000));

  year.innerHTML = year.innerHTML.toString().padStart(2, "0");
  month.innerHTML = month.innerHTML.toString().padStart(2, "0");
  day.innerHTML = day.innerHTML.toString().padStart(2, "0");
  hour.innerHTML = hour.innerHTML.toString().padStart(2, "0");
  minute.innerHTML = minute.innerHTML.toString().padStart(2, "0");
  second.innerHTML = second.innerHTML.toString().padStart(2, "0")
  
  
  
  

 
};


inputBirthday.addEventListener ("change", ()=>{

  setInterval(updateCountdown, 1000);
    
});

