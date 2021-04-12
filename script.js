var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");

dino.addEventListener("click", () => {
  if (dino.classList != "animate") {
    dino.classList.add("animate");
  }
  setTimeout(() => {
    dino.classList.remove("animate");
  }, 500);
});

var computeCollision = setInterval(function () {
  var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  var cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 280) {
    cactus.style.animation = "none";
    cactus.style.display = "none";
    alert("Arrrr. Try Again ") ? "" : location.reload();
  }
}, 10);
