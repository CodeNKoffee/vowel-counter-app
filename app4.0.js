//FOURTH ATTEMPT - SUCCESS

//Selectors
const inputButton = document.querySelector(".checker__btn");
const inputBox = document.getElementById("text__input");
const outputBox = document.querySelector(".vowel__count");

//Event Listeners
inputButton.addEventListener("click", vowelProcessing);

//Functions
function vowelProcessing() {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for(let letter of inputBox.value.toLowerCase()) {
    if(vowels.includes(letter)) {
      vowelsCount += 1;
    }
  }
  const vowelScore = document.createElement("h5");
  vowelScore.innerText = `There are ${vowelsCount} vowels in your sentence.`;
  vowelScore.classList.add("vowel__score");
  outputBox.appendChild(vowelScore);
}
