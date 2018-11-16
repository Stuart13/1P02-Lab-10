var myPrompt = prompt("What is your age?");

var age = Number(myPrompt);

var todayDate = new Date();

var thisYear = todayDate.getFullYear();

document.getElementById("year").innerHTML= thisYear - age;
