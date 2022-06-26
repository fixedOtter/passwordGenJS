/* ************ */
/* declarations */
/* ************ */

/* used for rounding floats and making strings become integers */
const round = Math.round;






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = compilePassword();
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
      if ((userInput == round(userInput)) && (round(userInput) <= 128) && (round(userInput) >= 8) ) {
        /* sets passLength to userInput if it's an integer */
        passLength = round(userInput);
        console.log('password length grab success');

        /* sets criteriaLength to end loop */
        criteriaLength = true;
      } else {
        /* lets the user know that their input sucked and resets loop :) */
        alert('Invalid input! Please input an integer 8 <=  x <=128!');
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
        /* lets the user know that their input sucked and resets loop :) */
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
        /* lets the user know that their input sucked and resets loop :) */
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
        /* lets the user know that their input sucked and resets loop :) */
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
        /* lets the user know that their input sucked and resets loop :) */
        alert('Invalid input! Please input yes or no, y or n, true or false, t or f.');
        console.log('specs criteria grab failure');
      }
    }
    
    criteriaMet = true;
  
  }

  return {passLength, includeCaps, includeLows, includeNums, includeSpecs};
}



/* ******************************************************* */
/* this is taking the user criteria and makes one charPool */
/* ******************************************************* */
function generateCharPool(includeCaps, includeLows, includeNums, includeSpecs) {
  /* declaring my character pool to pull from */
  let capitalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  let numberChars = '0123456789';
  let specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let charPool = '';


  /* will check each bool and add the charPool for each criteria var */
  if (includeCaps) {
    charPool += capitalChars;
  }
  if (includeLows) {
    charPool += lowerChars;
  }
  if (includeNums) {
    charPool += numberChars;
  }
  if (includeSpecs) {
    charPool += specialChars;
  }

  return charPool;
}



/* ******************************************************************************************************** */
/* this is taking the charPool and passLength to generate the password we're going to fill into the textbox */
/* ******************************************************************************************************** */
function generatePassword(charPool, passLength) {
  /* declaring variable pass which will hold the generated password */
  let pass = '';
    
  /* ************************************** */
  /* this is the actual password generator! */
  /* ************************************** */

  /* basically you have this for loop that will iterate through the length of the password */
  /* as it iterates through, it will define a random character from the charPool to pass */
  for (let i = 0; i < passLength; i++) {

      /* this is adding that random character to pass by generating a random number <= the length of charPool */
      /* by doing it this way, i can vary what the charPool is and it's length without having to change what  */
      /* the password generation is setup to do. */
      pass += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }

  return pass;
}

/* ********************************************************** */
/* this is the lightweight "main" function to call the others */
/* ********************************************************** */
function compilePassword() {
  /* declaring variables */

  /* calling the functions */
  let validUserInput = getCheckInput();

  /* pull variables from the validUserInput */
  let passLength = validUserInput.passLength,
      includeCaps = validUserInput.includeCaps, 
      includeLows = validUserInput.includeLows, 
      includeNums = validUserInput.includeNums, 
      includeSpecs = validUserInput.includeSpecs;

  /* calls and creates the charPool */
  let validCharPool = generateCharPool(includeCaps, includeLows, includeNums, includeSpecs);

  /* FINALLLY generates the password lol */
  let password = generatePassword(validCharPool, passLength);

  


  return password;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
