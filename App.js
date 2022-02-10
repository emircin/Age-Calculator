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
   }
 }


window.addEventListener ("load", ()=> {

     wait(1500);

    loaderSpinner.innerHTML = "<p><img src='./images/tick.png' alt='' height='60px'>READY</p>";
    loaderSpinner.style.marginLeft = '-15px'


})


birthDayInput.addEventListener ("click", () =>{

    backgroundImages.style.backgroundImage = "url('./images/key.jpg')";

    counter.style.color = "white";

    ageHeader.style.color = "white";

    selectBirthday.style.color = "white";

    inputBirthday.style.backgroundColor = "#b76d40"

});

let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");




inputBirthday.addEventListener ("change", ()=>{


        var bDay = new Date(`${inputBirthday.value}`).getTime();
        var today = new Date().getTime();
        var birthDay = today - bDay;
        var birthDay2 = birthDay % (1000 * 60 * 60 * 24 * 365);
        var birthDay3 = birthDay2 % (1000 * 60 * 60 * 24 *30);
        var birthDay4 = birthDay3 % (1000 * 60 * 60 * 24);
        var birthDay5 = birthDay4 % (1000 * 60 * 60);
        var birthDay6 = birthDay5 % (1000 * 60);



        year.innerText = Math.floor(birthDay / (1000 * 60 * 60 * 24 * 365));
        month.innerText = Math.floor(birthDay2 / (1000 * 60 * 60 * 24 * 30));
        day.innerText = Math.floor(birthDay3 / (1000 * 60 * 60 * 24));
        hour.innerText = Math.floor(birthDay4 / (1000 * 60 * 60));
        minute.innerText = Math.floor(birthDay5 / (1000 * 60));
        second.innerText = Math.floor(birthDay6 / (1000));



}
)
