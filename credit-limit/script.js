// Get references to the input fields
const accountNumberInput = document.getElementById("accountNumber");
const beginningBalanceInput = document.getElementById("beginningBalance");
const totalChargesInput = document.getElementById("totalCharges");
const totalCreditsInput = document.getElementById("totalCredits");
const creditLimitInput = document.getElementById("creditLimit");

// Prompt the user to input account details
const accountNumber = parseInt(prompt("Enter account number:"));
const beginningBalance = parseInt(prompt("Enter beginning balance:"));
const totalCharges = parseInt(prompt("Enter total charges:"));
const totalCredits = parseInt(prompt("Enter total credits:"));
const creditLimit = parseInt(prompt("Enter credit limit:"));

// set the input values to the user input
accountNumberInput.value = accountNumber;
beginningBalanceInput.value = beginningBalance;
totalChargesInput.value = totalCharges;
totalCreditsInput.value = totalCredits;
creditLimitInput.value = creditLimit;

const checkButton = document.getElementById("checkButton");

// checkButton.addEventListener("click", function () {
//   checkCreditLimit();
// });

function checkCreditLimit(event) {
  // Prevent form submission
  event.preventDefault();

  // Get input values
  const accountNumber = parseInt(
    document.getElementById("accountNumber").value
  );
  const beginningBalance = parseInt(
    document.getElementById("beginningBalance").value
  );
  const totalCharges = parseInt(document.getElementById("totalCharges").value);
  const totalCredits = parseInt(document.getElementById("totalCredits").value);
  const creditLimit = parseInt(document.getElementById("creditLimit").value);

  // Calculate the new balance
  const newBalance = beginningBalance + totalCharges - totalCredits;

  // Get result container
  const resultContainer = document.getElementById("result");
  // Check if the new balance exceeds the credit limit
  if (newBalance > creditLimit) {
    resultContainer.innerHTML = "<p>Credit limit exceeded</p>";
  } else {
    resultContainer.innerHTML = "<p>New balance: " + newBalance + "</p>";
  }
}
