const months = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const days = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

const allMonths = [
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
months.innerText = allMonths[monthInx];
fullDate.innerText = new Date().toDateString();
let eachDay = "";

for (let i = firstDay; i > 0; i--) {
  eachDay += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    eachDay += `<div class="today">${i}</div>`;
  } else {
    eachDay += `<div>${i}</div>`;
  }
}

days.innerHTML = eachDay;
