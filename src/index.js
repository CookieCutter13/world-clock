function updateTime() {
  let laElement = document.querySelector("#los-angeles");
  if (laElement){
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let laTime = moment().tz("America/Los_Angeles");

  laDateElement.innerHTML = laTime.format("MMMM Do, YYYY ");
  laTimeElement.innerHTML = laTime.format("h:mm:ss [<small>]A[</small>]");
} 

  let tokyoElement = document.querySelector("#tokyo");
  if(tokyoElement) {
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY ");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
  }


  let parisElement = document.querySelector("#paris");
  if(parisElement){
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY ");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
  }
  let londonElement = document.querySelector("#london");
  if(londonElement){
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY ");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
}
