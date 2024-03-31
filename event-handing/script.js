const form = document.getElementById("form");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = message;
  element.focus();
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var username = document.getElementById("uname");

  var email = document.getElementById("email");
  var password = document.getElementById("pass");
  var reg_no = document.getElementById("reg_no");
  var phone = document.getElementById("phone");
  var skills = document.querySelectorAll('input[type="checkbox"]');
  var gender = document.getElementById("m");

  result = [];
  skills.forEach((item) => {
    // loop all the checkbox item
    if (item.checked) {
      //if the check box is checked
      let data = {
        // create an object
        item: item.value,
        selected: item.checked,
      };
      result.push(data); //stored the objects to result array
    }
  });
  console.log(result);
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  var passwordPattern = /^[a-zA-Z0-9._%+-]{8,20}$/;
  var reg_pattern = /^(20|21|22|23)MIS\d{4}$/;

  if (username.value == "") {
    setError(username, "username is needed");
  } else {
    setSuccess(username);
  }

  if (email.value == "") {
    setError(email, "email is required");
  } else if (!emailPattern.test(email.value)) {
    setError(email, "Enter correct email");
  } else {
    setSuccess(email);
  }

  if (phone.value == "") {
    setError(phone, "phone is needed");
  } else {
    setSuccess(phone);
  }

  if (password.value == "") {
    setError(password, "password is needed");
  } else if (!passwordPattern.test(password.value)) {
    setError(password, "Password must be min of 8 char ");
  } else {
    setSuccess(password);
  }

  if (reg_no.value == "") {
    setError(reg_no, "register no is needed");
  } else if (!reg_pattern.test(reg_no.value)) {
    setError(reg_no, "please enter the correct reg no");
  } else {
    console.log("Pattern>>", reg_pattern.test(reg_no));
    setSuccess(reg_no);
  }

  event.preventDefault();
});

// Open a new window
function openNewWindow() {
  window.open("https://www.example.com", "_blank");
}

// Change background color on button click or page refresh
function changeBackgroundColor() {
  var colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33E6", "#FFFF33"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Display calendar for the selected month and year on mouseover
function displayCalendar() {
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  // Your code to display the calendar goes here (not implemented for simplicity)
}
