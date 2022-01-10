//THIRD ATTEMPT - WORKS BUT LETS TRY ONE MORE TIME WHILE SEPERATING THE EVENT LISTENER AND FUNCTIONS

//Selectors
const inputButton = document.querySelector(".checker__btn");
const inputBox = document.getElementById("text__input");
const outputBox = document.querySelector(".vowel__count");

//Event Listeners & their Functions
inputButton.addEventListener("click", () => {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for(let letter of inputBox.value.toLocaleLowerCase()) {
    if(vowels.includes(letter)) {
      vowelsCount += 1;
    }
  }
  const vowelScore = document.createElement("h5");
  vowelScore.innerText = `There are ${vowelsCount} vowels in your sentence.`;
  vowelScore.classList.add("vowel__score");
  outputBox.appendChild(vowelScore);
})