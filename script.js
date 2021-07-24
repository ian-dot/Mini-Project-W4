$( function() {
    $("#due-date-input").datepicker();
  } );


var timeDate = $('#time-display');
//var today = moment();
// console.log(today);
// timeDate.text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
// setInterval(function() {      
//     timeDate.text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  
//     }, 1000);
function update(){
var today = moment();
var time = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(time);
timeDate.text(time);
}
setInterval(update, 1000);


/*var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("time-display").innerHTML = t;  */

