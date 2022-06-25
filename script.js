/* ************ */
/* declarations */
/* ************ */

/* used for rounding floats and making strings become integers */
const round = Math.round;






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}






/* ******************************************* */
/* function for getting && checking user input */
/* ******************************************* */
function getCheckInput() {
  
  /* declarations */
  
  /* password generated criteria */ // P.S. am I crazy for defining the var type before using it? I come from stricter coding lang.
  let passLength = 0;
  let includeCaps = false;
  let includeLows = false;
  let includeNums = false;
  let includeSpecs = false;
  let criteriaMet = false;

  /* getting initial user input */
  
  /* outer while loop for getting user input && checking that all criteria is met */
  while (!criteriaMet) {
    /* defining all critera bools */
    let criteriaLength = false;
    let criteriaCaps = false;
    let criteriaLows = false;
    let criteriaNums = false;
    let criteriaSpecs = false;
    
    /* while loop for length */
    while (!criteriaLength) {
      
      /* gets user input so it can be tested for */
      let userInput = prompt('How long should the password be?');

      /* tests userInput */
      if (userInput == round(userInput)) {
        /* sets passLength to userInput if it's an integer */
        passLength = round(userInput);
        console.log('password length grab success');

        /* sets criteriaLength to end loop */
        criteriaLength = true;
      } else {
        /* lets the user know that their input sucked and resets loop :)*/
        alert('Invalid input! Please input an integer!');
        console.log('password length grab failure');
      }
    }
    
    criteriaMet = true;

    /* FIXME
    *
    * I need to add the while comparison blocks for the other little variables
    * 
    * */
  
  }

  return {passLength, includeCaps, includeLows, includeNums, includeSpecs}
}







/* this is a chunky passGen function lol */
function generatePassword() {
  /* ******************* */
  /* declaring variables */
  /* ******************* */


  /* this will be my character pool to pull from */
  let numberChars = '0123456789';
  let capitalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  let specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let charCombo = '';

  /* the holy final password once generated */
  let password = '';

  /* calling the func to get all the user input and the like */
  let validUserInput = getCheckInput();
  console.log(validUserInput.passLength);
  console.log(validUserInput.includeCaps);
  console.log(validUserInput.includeLows);
  console.log(validUserInput.includeLows);
  console.log(validUserInput.includeSpecs);

  

  /* *********** */
  /* calculating */
  /* *********** */



  return specialChars;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
