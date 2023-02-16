function updateTime() {
  let laElement = document.querySelector("#los-angeles");
  if (laElement) {
    let laDateElement = laElement.querySelector(".date");
    let laTimeElement = laElement.querySelector(".time");
    let laTime = moment().tz("America/Los_Angeles");

    laDateElement.innerHTML = laTime.format("MMMM Do, YYYY ");
    laTimeElement.innerHTML = laTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY ");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY ");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let zagrebElement = document.querySelector("#zagreb");
  if(zagrebElement){
  let zagrebDateElement = zagrebElement.querySelector(".date");
  let zagrebTimeElement = zagrebElement.querySelector(".time");
  let zagrebTime = moment().tz("Europe/Zagreb");

  zagrebDateElement.innerHTML = zagrebTime.format("MMMM Do, YYYY ");
  zagrebTimeElement.innerHTML = zagrebTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );}

      let nyElement = document.querySelector("#new-york");
      if (nyElement) {
        let nyDateElement = nyElement.querySelector(".date");
        let nyTimeElement = nyElement.querySelector(".time");
        let nyTime = moment().tz("America/New_York");

        nyDateElement.innerHTML = nyTime.format("MMMM Do, YYYY ");
        nyTimeElement.innerHTML = nyTime.format("h:mm:ss [<small>]A[</small>]");
      }


}

function updateCity(event) {
    let cityTimeZone = event.target.value;
  console.log(event);
  if(cityTimeZone==="current"){
    cityTimeZone= moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

citiesElement.innerHTML = `
<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>`;

}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
