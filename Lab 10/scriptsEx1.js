var start = new Date();
var time = start.getTime();

function stopTime (){
var dateclick = new Date();
var newtime = dateclick.getTime();

var timespent = newtime - time;

var myAlert = alert("You've been on the page for " + timespent + "seconds." + time + "//" + newtime);

}
