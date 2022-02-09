const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");
const timeformat = document.getElementById("timeformat");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

setInterval(() => {
    const time = new Date();
    const year = time.getFullYear();
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const all = hour + ":" + minutes;
    const all2 = days[day] + " " + date + " " + months[month];

    dateEl.innerText = all2;
    timeEl.innerText = all;

    hoursEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)`

    minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`

    secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`
}, 1000)

function format() {
    console.log("test");
}