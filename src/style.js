let parisTime = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM, D, YYYY h:mm A");
let parisElement = document.querySelector("#parisTime");

let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY h:mm A");
let sydneyElement = document.querySelector("#sydney");

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
let honoluluElement = document.querySelector("#tokyo");
