// unix time module
'use strict';

const init = () => Date.now();
const fromUnix = unix => new Date(unix);
const toUnix = date => Date.parse(date);

const UnixTime = { init, fromUnix, toUnix, convertMs };

export default UnixTime;

//import Unix from "unix.js"

// const u = Unix.init()
// const date = Unix.fromUnix(u)
// date.getMonth() +1

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
