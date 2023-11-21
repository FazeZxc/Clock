let minHand = document.querySelector("minHand");
let secHand = document.querySelector("sechand");
let hourHand = document.querySelector("hourHand");
var r = document.querySelector(":root");

let Nowtime = new Date();
console.log(Nowtime.getHours());

let currentTime = {
  hr: Nowtime.getHours(),
  min: Nowtime.getMinutes(),
  sec: Nowtime.getSeconds(),
};

let ehrpos = 0;
let eminpos = 0;
let esecpos = 0;

let lastsecH = 0;
let lastminH = 0;
let lasthrH = 0;





function updateSec() {
  let secpos = 6 * Nowtime.getSeconds();
  lastsecH = 360 + secpos;
  r.style.setProperty("--secH", `${secpos}deg`);
  r.style.setProperty("--lastsecH", `${lastsecH}deg`);
}

function updateMin() {
  let minpos = 6 * Nowtime.getMinutes();
  lastminH = 360 + minpos;
  r.style.setProperty("--minH", `${minpos}deg`);
  r.style.setProperty("--lastminH", `${lastminH}deg`);
}

function updatehr() {
  let hrpos = 30 * Nowtime.getHours();
  lasthrH = 360 + hrpos;
  r.style.setProperty("--hrH", `${hrpos}deg`);
  r.style.setProperty("--lasthrH", `${lasthrH}deg`);
}

setInterval(updateSec(), 1000);
setInterval(updateMin(), 60000);
setInterval(updatehr(), 3600000);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function time() {
  for (let i = 0; currentTime.hr < 24; i++) {
    for (let j = 0; currentTime.min < 60; j++) {
      for (let k = 0; currentTime.sec < 60; k++) {
        await sleep(1000);
        currentTime.sec++;
        box.textContent = `${currentTime.hr} : ${currentTime.min} : ${currentTime.sec} IST`;
      }
      currentTime.sec = 0;
      currentTime.min++;
    }
    currentTime.min = 0;
    currentTime.hr++;
  }
  currentTime.hr = 0;
  currentTime.sec = 0;
  currentTime.min = 0;
}

setInterval(time(), 86400000);

let box = document.querySelector(".box");
