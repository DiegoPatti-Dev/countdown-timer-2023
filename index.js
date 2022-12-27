let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let dayDot = document.querySelector('.dayDot');
let hourDot = document.querySelector('.hourDot');
let minDot = document.querySelector('.minDot');
let secDot = document.querySelector('.secDot');

let endDate = '01/01/2023 00:00:00'
//date format mm/dd/yyyy

let x = setInterval(function(){
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  // time calculation for days, hours, minutes and seconds

  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / (1000));

  // output the result in element with id

  days.innerHTML = d + "<br><span>Dias<span>";
  hours.innerHTML = h + "<br><span>Horas<span>";
  minutes.innerHTML = m + "<br><span>Minutos<span>";
  seconds.innerHTML = s + "<br><span>Segundos<span>";

  //animte stroke

  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  //365 days in an year
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  //24 hours in a day
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  //60 minutes in an hour
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  //60 seconds in a minute

  //animate circle dots

  dayDot.style.transform = `rotateZ(${d * 0.986}deg)`;
  // 360deg / 365days = 0.986
  hourDot.style.transform = `rotateZ(${h * 15}deg)`;
  // 360deg / 24hrs = 15
  minDot.style.transform = `rotateZ(${m * 6}deg)`;
  // 360deg / 60minutes = 6
  secDot.style.transform = `rotateZ(${s * 6}deg)`;
  // 360deg / 60seconds = 6

  //if the countdown is over, write some text
  if(distance < 0){
    clearInterval(x);
    document.getElementById("time").style.display = 'none';
    document.querySelector("newYear").style.display = 'block';
  }
})