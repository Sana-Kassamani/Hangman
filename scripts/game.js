function ChooseWord() {
  var word = "transform";
  return word;
}
function generateDashes(secret_word) {
  var dashes = [];
  for (var i = 0; i < secret_word.length; i++) {
    dashes.push("_");
  }

  return dashes;
}

function displayWord(guessed_word) {
  var answer_section = document.getElementById("answer-section");
  var answer;
  if (!answer_section.hasChildNodes()) {
    answer = document.createElement("span");
    answer_section.appendChild(answer);
  } else {
    answer = answer_section.firstChild;
  }
  answer.innerHTML = guessed_word.join(" ");
}

function translateLetterPress(letter_pressed, secret_word, guessed_word) {
  var letters = document.querySelectorAll(".letter");
  console.log(letters);
  for (var i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click", function () {
      letter_pressed = this.innerHTML;
      checkLetter(letter_pressed, secret_word, guessed_word);
    });
  }
}

function checkLetter(letter_pressed, secret_word, guessed_word) {
  secret_word = secret_word.toUpperCase();
  if (secret_word.includes(letter_pressed)) {
    guessed_word = changeGuessedWord(letter_pressed, secret_word, guessed_word);
    displayWord(guessed_word);
  } else {
    console.log("wrong letter");
  }
}

function changeGuessedWord(letter_pressed, secret_word, guessed_word) {
  for (var i = 0; i < guessed_word.length; i++) {
    if (secret_word[i] === letter_pressed) guessed_word[i] = letter_pressed;
  }
  return guessed_word;
}

function play() {
  var secret_word = ChooseWord();
  var letter_pressed = "";
  var guessed_word = generateDashes(secret_word);
  displayWord(guessed_word);
  translateLetterPress(letter_pressed, secret_word, guessed_word);
}

play();
