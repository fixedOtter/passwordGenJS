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
    

    /* FIXME
    *
    * The length criteria can be blank
    * 
    * Also the length isn't bound to 8 - 128
    * 
    * Good start so far though! :)
    */
    
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

    while (!criteriaCaps) {
      
      /* gets user input so it can be tested for */
      let userInput = prompt('Do you want to include capital characters?');

      /* tests userInput */
      if (userInput == 'yes' || userInput == 'y' || userInput == 'true' || userInput == 't') {
        /* sets include to true */
        includeCaps = true;
        console.log('caps criteria grab success - true');

        /* sets criteria to end loop */
        criteriaCaps = true;
      } else if (userInput == 'no' || userInput == 'n' || userInput == 'false' || userInput == 'f') {
        /* logs that user said no */
        console.log('caps criteria grab success - false')

        /* sets criteria to end loop */
        criteriaCaps = true;
      } else {
        /* lets the user know that their input sucked and resets loop :)*/
        alert('Invalid input! Please input yes or no, y or n, true or false, t or f.');
        console.log('caps criteria grab failure');
      }
    }

    while (!criteriaLows) {
      
      /* gets user input so it can be tested for */
      let userInput = prompt('Do you want to include lowerchase characters?');

      /* tests userInput */
      if (userInput == 'yes' || userInput == 'y' || userInput == 'true' || userInput == 't') {
        /* sets include to true */
        includeLows = true;
        console.log('lows criteria grab success - true');

        /* sets criteria to end loop */
        criteriaLows = true;
      } else if (userInput == 'no' || userInput == 'n' || userInput == 'false' || userInput == 'f') {
        /* logs that user said no */
        console.log('lows criteria grab success - false')

        /* sets criteria to end loop */
        criteriaLows = true;
      } else {
        /* lets the user know that their input sucked and resets loop :)*/
        alert('Invalid input! Please input yes or no, y or n, true or false, t or f.');
        console.log('lows criteria grab failure');
      }
    }

    while (!criteriaNums) {
      
      /* gets user input so it can be tested for */
      let userInput = prompt('Do you want to include integers?');

      /* tests userInput */
      if (userInput == 'yes' || userInput == 'y' || userInput == 'true' || userInput == 't') {
        /* sets include to true */
        includeNums = true;
        console.log('nums criteria grab success - true');

        /* sets criteria to end loop */
        criteriaNums = true;
      } else if (userInput == 'no' || userInput == 'n' || userInput == 'false' || userInput == 'f') {
        /* logs that user said no */
        console.log('nums criteria grab success - false')

        /* sets criteria to end loop */
        criteriaNums = true;
      } else {
        /* lets the user know that their input sucked and resets loop :)*/
        alert('Invalid input! Please input yes or no, y or n, true or false, t or f.');
        console.log('nums criteria grab failure');
      }
    }

    while (!criteriaSpecs) {
      
      /* gets user input so it can be tested for */
      let userInput = prompt('Do you want to include special characters?');

      /* tests userInput */
      if (userInput == 'yes' || userInput == 'y' || userInput == 'true' || userInput == 't') {
        /* sets include to true */
        includeSpecs = true;
        console.log('specs criteria grab success - true');

        /* sets criteria to end loop */
        criteriaSpecs = true;
      } else if (userInput == 'no' || userInput == 'n' || userInput == 'false' || userInput == 'f') {
        /* logs that user said no */
        console.log('specs criteria grab success - false')

        /* sets criteria to end loop */
        criteriaSpecs = true;
      } else {
        /* lets the user know that their input sucked and resets loop :)*/
        alert('Invalid input! Please input yes or no, y or n, true or false, t or f.');
        console.log('specs criteria grab failure');
      }
    }
    
    criteriaMet = true;
  
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
  console.log(validUserInput.includeNums);
  console.log(validUserInput.includeSpecs);

  

  /* *********** */
  /* calculating */
  /* *********** */



  return 1;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
