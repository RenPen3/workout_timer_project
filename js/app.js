const startBtn = document.getElementById('start');
let lapBtn = document.getElementById('lap');
const btns = document.querySelectorAll('.btns');



function tobataFormat() {
  let result = document.getElementById('result');
  var i = 0;
  for (i = 0; i < 101; i++) {
    result.innerHTML = i;
    console.log(i)

  }

}

function startClock() {
  startBtn.addEventListener('click', () => {
    console.log('start');
    startBtn.innerHTML = 'Stop'
    tobataFormat();
  })
}

function lapClock() {
  lapBtn.addEventListener('click', () => {
    result.innerHTML = 0;
    console.log('stop');
  })
}

startClock();
lapClock();

