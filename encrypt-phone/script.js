// Prompt the user to enter a four-digit integer
var userInput = prompt("Enter a four-digit integer:");
// Convert the user input to an array of digits
var digits = userInput.split("").map(Number);

// Encrypt the digits
var encryptedDigits = digits.map(function (digit) {
  return (digit + 7) % 10;
});

// Swap the first and third digits

var temp = encryptedDigits[0];
encryptedDigits[0] = encryptedDigits[2];
encryptedDigits[2] = temp;

// Swap the second and fourth digits
temp = encryptedDigits[1];
encryptedDigits[1] = encryptedDigits[3];
encryptedDigits[3] = temp;

// Convert the encrypted digits back to a string
var encryptedNumber = encryptedDigits.join("");

// Display the encrypted number
document.write("<p>The encrypted number is " + encryptedNumber + "</p>");
