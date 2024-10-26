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

displayDashes();
