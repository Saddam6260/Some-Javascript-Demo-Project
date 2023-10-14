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
const weekdays = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 22, 49, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month - 1];
const date = futureDate.getDate();

let day = futureDate.getDay();
day = weekdays[day - 1];

giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hour}:${minute}am`;

// Future Time
const futureTime = futureDate.getTime();
console.log(futureTime);

const getRemainingTime = () => {
  const today = new Date().getTime();
  console.log(today);
  const t = futureTime - today;
  console.log(t);

  // Get time
  // oneDay = 24d
  // oneMinute = 60s
  // oneSecound = 1000ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let day = Math.floor(t / oneDay);
  let hour = Math.floor((t % oneDay) / oneHour);
  let minute = Math.floor((t % oneHour) / oneMinute);
  let secound = Math.floor((t % oneMinute) / 1000);

  const values = [day, hour, minute, secound];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(counter);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveway has expired</h4>`;
  }
};

const counter = setInterval(getRemainingTime, 1000);
