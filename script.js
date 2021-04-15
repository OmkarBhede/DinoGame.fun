var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");
var score = document.getElementById("score");

dino.addEventListener("click", () => {
  if (dino.classList != "animate") {
    dino.classList.add("animate");
  }
  setTimeout(() => {
    dino.classList.remove("animate");
  }, 500);
});
var startTime;
var endTime;

start();

var computeCollision = setInterval(function () {
  var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  var cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 280) {
    cactus.style.animation = "none";
    cactus.style.display = "none";
    alert("Arrrr. Try Again " + "[ New score : " + scorecalc() + " ]")
      ? ""
      : location.reload();
  }
  score.innerText = "score : " + scorecalc();
}, 10);

function start() {
  startTime = new Date();
}

function scorecalc() {
  endTime = new Date();
  var timeDiff = endTime - startTime;
  timeDiff /= 100;
  var insecond = Math.round(timeDiff);
  return insecond;
}
