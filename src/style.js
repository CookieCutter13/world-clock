let laElement = document.querySelector("#los-angeles");
let laDateElement = laElement.querySelector(".date");
let laTimeElement = laElement.querySelector(".time");
let laTime = moment().tz("America/Los_Angeles");

laDateElement.innerHTML = laTime.format("MMMM Do, YYYY ");
laTimeElement.innerHTML = laTime.format("h:mm :ss [<small>]A[</small>]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY ");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm :ss [<small>]A[</small>]");

let zagrebElement = document.querySelector("#zagreb");
let zagrebDateElement = Element.querySelector(".date");
let xagrebTimeElement = Element.querySelector(".time");
let zagrebTime = moment().tz("");

zagrebDateElement.innerHTML = Time.format("MMMM Do, YYYY ");
zagrebTimeElement.innerHTML = Time.format("h:mm :ss [<small>]A[</small>]");

let Element = document.querySelector("#");
let DateElement = Element.querySelector(".date");
let TimeElement = Element.querySelector(".time");
let Time = moment().tz("");

DateElement.innerHTML = Time.format("MMMM Do, YYYY ");
TimeElement.innerHTML = Time.format("h:mm :ss [<small>]A[</small>]");

let Element = document.querySelector("#los-angeles");
let DateElement = Element.querySelector(".date");
let TimeElement = Element.querySelector(".time");
let Time = moment().tz("");

DateElement.innerHTML = Time.format("MMMM Do, YYYY ");
TimeElement.innerHTML = Time.format("h:mm :ss [<small>]A[</small>]");
