
//    // ==== Global variables ====
var score = 0;
var timer = 60;  
var hitrn = 0;  // Current hit number
var timerint = null;

// ==== Cache DOM elements ====
var pbtm = document.querySelector("#pbtm");
var scoreval = document.querySelector("#scoreval");
var timerval = document.querySelector("#timerval");
var hitval = document.querySelector("#hitval");
var scorScreen = document.querySelector("#main .scor");
var finalScore = document.querySelector("#main .scor h5");
var replayBtn = document.querySelector("#main .replay");

// ==== Functions ====

// Create 72 bubbles with random digits and show them
function makebubble() {
  var clutter = "";
  for (var i = 1; i <= 72; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  pbtm.innerHTML = clutter;
}

// Increase score and update display
function increasescore() {
  score += 10;
  scoreval.textContent = score;
}

// Pick new target number and update display
function getnewhit() {
  hitrn = Math.floor(Math.random() * 10);
  hitval.textContent = hitrn;
}

// Start the countdown timer
function runtimer() {
  timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      timerval.textContent = timer;
    } else {
      clearInterval(timerint);

      // Game over UI update
      pbtm.innerHTML = "";
      finalScore.textContent = score;
      scorScreen.style.opacity = 1;
      scorScreen.style.zIndex = 9;

      // Replay button event (only once)
      replayBtn.addEventListener(
        "click",
        function () {
          scorScreen.style.zIndex = -1;
          scorScreen.style.opacity = 0;

          timer = 60; // reset timer, change to 60 when ready
          score = 0;
          scoreval.textContent = 0;

          makebubble();
          getnewhit();
          runtimer();
        },
        { once: true }
      );
    }
  }, 1000);
}

// ==== Event Listeners ====

// When user clicks a bubble
pbtm.addEventListener("click", function (dets) {
  if (dets.target.classList.contains("bubble")) {
    var clickedno = Number(dets.target.textContent);
    if (clickedno === hitrn) {
      increasescore();
      makebubble();
      getnewhit();
    }
  }
});

// ==== Start game ====
makebubble();
getnewhit();
runtimer();

 
