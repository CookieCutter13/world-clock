let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showTime);

let parisTime = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM, D, YYYY h:mm A");
let parisElement = document.querySelector("#paris");


let laElement = document.querySelector("#los-angeles");
let laDateElement = laElement.querySelector(".date");
let laTimeElement = laElement.querySelector(".time");
let laTime = moment().tz("America/Los_Angeles");

laDateElement.innerHTML = laTime.format("MMMM Do, YYYY ");
laTimeElement.innerHTML = laTime.format("h:mm :ss [<small>]A[</small>]");

let tokyoTime = moment();
tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
let tokyoElement = document.querySelector("#tokyo");

let zagrebTime = moment().tz("").format("dddd, MMMM D, YYYY h:mm A");
let zagrebElement = document.querySelector("#zagreb");

let londonTime = moment();
tz("").format("dddd, MMMM D, YYYY h:mm A");
let londonElement = document.querySelector("#london");
