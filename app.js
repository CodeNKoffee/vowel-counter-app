//FIRST ATTEMPT - FAILED

//Selectors
const inputText = document.getElementById("text__input");
const checkButton = document.querySelector(".checker__btn");
const vowelCountBox = document.querySelector(".vowel__count");

//Event listeners
checkButton.addEventListener("click", getVowelCount);

//Functions
function getVowelCount(e) {
  //Prevent form from submitting
  e.preventDefault();
  //Print Results
  const vowelDeclaration = document.createElement("h5");
  vowelDeclaration.innerText = `There are ${vowelsCount} vowels in your sentence`;
  vowelDeclaration.classList.add("vowel__declare");
  vowelCountBox.appendChild(vowelDeclaration);
  // Count Vowels
  function getVowels() {
    const vowelsCount = 0;
    //Turn the input into a string
    let inputText = inputText.toString();
    //Loop through the string
    for(let i = 0; i <= inputText.length - 1; i++) {
      //If a vowel, add to Vowel Count
      if(inputText.charAt(i) == "a" || inputText.charAt(i) == "e" ||inputText.charAt(i) == "i" || inputText.charAt(i) == "o" || inputText.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
  }
  getVowels();
}
getVowelCount();
