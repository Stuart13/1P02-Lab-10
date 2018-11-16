var start = new Date();
var time = start.getSeconds();

function stopTime (){
var dateclick = new Date();
var newtime = dateclick.getSeconds();

var timespent = newtime - time;

var myAlert = alert("You've been on the page for " + timespent + " second(s).");

}
