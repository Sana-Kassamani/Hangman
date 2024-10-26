var attempts_to_hang_map = {
  1: ["assets/head.svg", "head"],
  2: ["assets/body.svg", "body"],
  3: ["assets/left-hand.svg", "left-hand"],
  4: ["assets/right-hand.svg", "right-hand"],
  5: ["assets/left-leg.svg", "left-leg"],
  6: ["assets/right-leg.svg", "right-leg"],
};
var failed_attempts = 0;

function hang() {
  failed_attempts += 1;
  var hang = document.getElementById("hang");
  var img = document.createElement("img");
  img.setAttribute("src", attempts_to_hang_map[failed_attempts][0]);
  img.setAttribute("class", attempts_to_hang_map[failed_attempts][1]);
  hang.appendChild(img);
}

function checkGameOver(failed_attempts, secret_word) {
  if (failed_attempts === 6) {
    alert(`Game Over!! Word is: ${secret_word}`);
    window.location.reload();
  }
}
