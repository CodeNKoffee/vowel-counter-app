//Selectors
const inputButton = document.querySelector(".checker__btn");
const inputBox = document.getElementById("text__input");
const outputBox = document.querySelector(".vowel__count");

//SECOND ATTEMPT - FAILED

//Event Listeners
inputButton.addEventListener("click", vowelProcessing);

//Functions
function vowelProcessing(event) {
  //Prevent from submitting
  event.preventDefault();
  //Counting Vowels
  function getVowels() {
    const vowelsCount = 0;
    //Turning the Input into a String
    let split = inputBox.split('');
    inputBox.value = '';
    //Looping through the String
    for(let i = 0; i < split.length; i++) {
      //If Vowel, increment to vowelsCount
      if(split[i] == "a" || split[i] == "e" || split[i] == "i" || split[i] == "o" || split[i] == "u" || split[i] == "y") {
        vowelsCount +=1;
      }
    }
  } getVowels(inputBox);
  //Print Results
  const vowelScore = document.createElement("h5");
  vowelScore.innerText = `There are ${vowelsCount} vowels in your sentence.`;
  vowelScore.classList.add("vowel__score");
  outputBox.appendChild(vowelScore);
}

