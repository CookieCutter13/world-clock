let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showTime);

let parisTime = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM, D, YYYY h:mm A");
let parisElement = document.querySelector("#parisTime");

let Time = moment()
  .tz("")
  .format("dddd, MMMM D, YYYY h:mm A");
let Element = document.querySelector("#");

let tokyoTime = moment()
tz("Asia/Tokyo")
.format("dddd, MMMM D, YYYY h:mm A");
let tokyoElement = document.querySelector("#tokyo");

let Time = moment()
  .tz("")
  .format("dddd, MMMM D, YYYY h:mm A");
let Element = document.querySelector("#");

let Time = moment();
tz("").format("dddd, MMMM D, YYYY h:mm A");
let Element = document.querySelector("#");
