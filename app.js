const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function dataTime() {
    year.textContent = new Date().getFullYear() + " / ";
    month.textContent = new Date().getMonth() + 1 + " / ";
    day.textContent = new Date().getDate();

    hours.textContent = new Date().getHours() + " : ";
    minutes.textContent = new Date().getMinutes() + " : ";
    seconds.textContent = new Date().getSeconds();

    setInterval(dataTime, 1000)
}
window.addEventListener("load", dataTime)

