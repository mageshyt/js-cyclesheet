const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculateCharges = (hoursParked) => {
  const minimumFee = 2.0;
  const hourlyRate = 0.5;
  const maxChargePerDay = 10.0;

  let totalCharge = 0;

  // Minimum fee for up to 3 hours
  if (hoursParked <= 3) {
    totalCharge = minimumFee;
  } else {
    // Calculate additional charges for hours exceeding 3 hours
    totalCharge = minimumFee + hourlyRate * Math.min(hoursParked - 3, 21);
  }

  // Maximum charge for any given 24-hour period
  return Math.min(totalCharge, maxChargePerDay);
};

const calculateParkingCharges = () => {
  rl.question(
    "Enter hours parked for the customer (up to 24 hours): ",
    (hoursParked) => {
      hoursParked = parseFloat(hoursParked);

      if (isNaN(hoursParked) || hoursParked < 0 || hoursParked > 24) {
        console.log(
          "Invalid input. Please enter a valid number between 0 and 24."
        );
      } else {
        const charge = calculateCharges(hoursParked);
        console.log(`Parking charge for the customer: $${charge.toFixed(2)}`);
      }

      rl.close();
    }
  );
};

calculateParkingCharges();
