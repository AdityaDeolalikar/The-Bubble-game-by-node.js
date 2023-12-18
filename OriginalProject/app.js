function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 1900; i++) {
    var randomNumberForBubble = Math.floor(Math.random() * 10);
    clutter += `<div class = "bubble">${randomNumberForBubble}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#runtime").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over !</h1>`
    }
  }, 1000);
}

var score = 0;
function getscore() {
  score += 10;
  document.querySelector("#scoreValue").innerHTML = score;
}

var randomNumberforHit = 0;
function getNewHit() {
  randomNumberforHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitvalue").innerHTML = randomNumberforHit;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);

  if (clickedNumber === randomNumberforHit) {
    getscore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();
