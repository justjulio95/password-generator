// Assignment code here
/*
  WHAT MAKES A POTENTIAL PASSWORD?
    - Uppercase letters
    - Lowercase letters
    - Numbers
    - Special characters
*/

var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = alphaUpper.toLowerCase();
var numbers = "0123456789";
var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var pW = {
  length: 0,
  characters: '',
  reset: function() {
    this.length = 0;
    this.characters = "";
  }
};

/*
  Criteria Notes
  - Ask for length of the password (MIN 8 characters, MAX 128)
  - Ask user if they want UPPERCASE letters
  - Ask user if they want LOWERCASE letters
  - Ask user if they want NUMBERS
  - Ask user if they want SPECIAL CHARACTERS
*/

//var length = prompt("How long would you like your password to be? (Please pick a number between 8 and 128)");
//ask about how to make sure the input is a number

var askLength = function() {
  var length = prompt("How long would you like your password to be? (Please pick a number between 8 and 128)");

  //if(isNaN(parseInt(value)){.... not a number code here ... }
  //length = parseInt(length);

  if (isNaN(parseInt(length)) || (length < 8 || length > 128)) {
    alert("You did not enter an appropriate value. Please try again.");
    askLength();
  } else {
    pW.length = length;
    console.log(pW.length);
  }
};

//var checkUpper = confirm("Would you like your password to include UPPERCASE letters?");
var askUpper = function() {
  var checkUpper = confirm("Would you like your password to include UPPERCASE letters?");
  // If yes (TRUE) return true;
  if (checkUpper) {
    alert("UPPERCASE letters will be included.");
    pW.characters += alphaUpper;
    console.log(pW.characters);
    //return true;
  } else{
    alert("UPPERCASE letters WILL NOT be included.")
    pW.characters += ''
    console.log(pW.characters);
    //return false;
  }
};

//var checkLower = confirm("Would you like your password to include LOWERCASE letters?");
var askLower = function() {
  var checkLower = confirm("Would you like your password to include LOWERCASE letters?");

  if (checkLower) {
    alert("LOWERCASE letters will be included.");
    pW.characters += alphaLower;
    console.log(pW.characters);
    //return true;
  } else {
    alert("LOWERCASE letters WILL NOT be included.");
    pW.characters += ''
    console.log(pW.characters);
    //return false;
  }
};

//var checkNumbs = confirm("Would you like your password to include NUMBERS?");
var askNumbs = function() {
  var checkNumbs = confirm("Would you like your password to include NUMBERS?");

  if (checkNumbs) {
    alert("NUMBERS will be included.");
    pW.characters += numbers;
    console.log(pW.characters);
    //return true;
  } else {
    alert("NUMBERS WILL NOT be included.");
    pW.characters += ''
    console.log(pW.characters);
    //return false;
  }
};
//var checkSpecial = confirm("Would you like your password to include SPECIAL characters?");
var askSpecial = function() {
  checkSpecial = confirm("Would you like your password to include SPECIAL characters?");

  if (checkSpecial) {
    alert("SPECIAL characters will be included.");
    pW.characters += special;
    console.log(pW.characters);
    //return true;
  } else {
    alert("SPECIAL characters WILL NOT be included.");
    pW.characters += ''
    //return false;
  }
};

var generatePassword = function() {

  pW.reset();
  askLength();
  askUpper();
  askLower();
  askNumbs();
  askSpecial();

  //declare empty password variable
  var password = '';

  //iterate through the pW.characters value
  for (var i = 0; i < pW.length; i++) {
    var randomChar = Math.floor(Math.random() * pW.characters.length);
 
    password += pW.characters.substring(randomChar, randomChar + 1);
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);