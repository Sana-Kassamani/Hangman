function ChooseWord() {
  var word = "transform";
  return word;
}
function displayDashes() {
  var secret_word = ChooseWord();
  var answer_section = document.getElementById("answer-section");
  var dashes = [];
  for (var i = 0; i < secret_word.length; i++) {
    dashes.push("_");
  }
  var answer = document.createElement("span");
  answer.innerHTML = dashes.join(" ");
  answer_section.appendChild(answer);
}

function translateLetterPress(letter_pressed) {
  var letters = document.querySelectorAll(".letter");

  console.log(letters);
  for (var i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click", function () {
      letter_pressed = this.innerHTML;
      console.log(letter_pressed);
    });
  }
  return letter_pressed;
}
var letter_pressed = "";
displayDashes();
translateLetterPress(letter_pressed);
