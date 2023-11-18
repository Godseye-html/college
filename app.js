// area of trianlge
let result = document.querySelector(".output");
let btn = document.querySelector(".btn").addEventListener("click", () => {
    let length = document.querySelector(".length").value;
    let width = document.querySelector(".width").value;
    let output = Number(length * width);
    result.innerHTML = output;
    window.alert(`area of rectangle is:${output}`);
});
// time date
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let date = document.querySelector(".date");
function updateClock() {
    const currentdate = new Date();
    let day = currentdate.getDay();
    let month = currentdate.getMonth();
    let hour = currentdate.getHours();
    let minute = currentdate.getMinutes();
    let second = currentdate.getSeconds();
    let year = currentdate.getFullYear();
    day = days[day];
    month = months[month];
    hour = hour < 12 ? hour % 12 : 12;
    hour = hour < 10 ? (hour = `0${hour}`) : hour;
    minute < 10 ? (minute = `0${minute}`) : minute;
    second < 10 ? (second = `0${minute}`) : second;
    date.innerHTML = `${day} , ${month} , ${year} , ${hour}:${minute}:${second}`;
}
setInterval(updateClock, 1000);
