//Choose a random word as a secret word
function ChooseWord() {
  var words = [
    "screen",
    "programming",
    "application",
    "keyboard",
    "javascript",
    "gaming",
    "network",
  ];
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
}

//Generate dashes as per the number of letters in secret word
//O(n), n being length of secret-word
function generateDashes(secret_word) {
  var dashes = [];
  for (var i = 0; i < secret_word.length; i++) {
    dashes.push("_");
  }
  return dashes;
}

// display secret word with guessed chars so far (DOM)
// O(n), n being length of guessed word (join method)
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

//add event listener to each letter when pressed to check if included in secret word
//O(1) constant nb of letters in html 27
function translateLetterPress(secret_word, guessed_word) {
  var letters = document.querySelectorAll(".letter");
  for (var i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click", function () {
      var letter_pressed = this.innerHTML;
      this.style.display = "none";
      checkLetter(letter_pressed, secret_word, guessed_word);
      //not the best approach with timeout, can be solved with Promise
      setTimeout(() => {
        checkIfGuessed(guessed_word, secret_word);
        checkGameOver(failed_attempts, secret_word);
      }, 100);
    });
  }
}

//check if pressed letter is included in secret word
//O(n), n being length of secret-word (includes method)
function checkLetter(letter_pressed, secret_word, guessed_word) {
  secret_word = secret_word.toUpperCase();
  if (secret_word.includes(letter_pressed)) {
    guessed_word = changeGuessedWord(letter_pressed, secret_word, guessed_word);
    displayWord(guessed_word);
  } else {
    hang();
  }
}

// Change guessed word if a letter is guessed
// O(n), n being length of guessed-word as array== length of secret-word as string
function changeGuessedWord(letter_pressed, secret_word, guessed_word) {
  for (var i = 0; i < guessed_word.length; i++) {
    if (secret_word[i] === letter_pressed) guessed_word[i] = letter_pressed;
  }
  return guessed_word;
}

// check if word has been guessed
// O(n), n being length of guessed word (join method)
function checkIfGuessed(guessed_word, secret_word) {
  if (guessed_word.join("") === secret_word.toUpperCase()) {
    alert("You Won!!!");
    window.location.reload();
  }
}

// main function to play
// O(n), n being  length of secret word ... sum of all its functions complexities
function play() {
  var secret_word = ChooseWord();
  var guessed_word = generateDashes(secret_word);
  displayWord(guessed_word);
  translateLetterPress(secret_word, guessed_word);
}

play();
