function updateTime(event) {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");

  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss [<small>] A [</small]"
  );
}
updateTime();
setInterval(updateTime, 1000);
