const checkbtn = document.querySelector(".check");
const cards = document.getElementsByTagName("select");
const validLabel = document.querySelector(".info");
const validContainer = document.querySelector(".info_container");

const validateCard = () => {
  const selected_card = cards[0].value;
  const patterns = {
    Master: /^5[1-5]\d{14}$/,
    American: /^3[47]\d{11}$/,
    Visa: /^4(\d{16} | \d{13})$/,
    Diner: /^(30[0-5]\d{11}|3[68]\d{12})$/,
    JCB: /^(2131\d{11}|35\d{13})$/,
    Discover: /^(6011\d{12}|65\d{14})$/,
  };

  const cardPattern = patterns[selected_card];
  const typedValue = document.querySelector(".user_input").value;

  if (cardPattern.test(typedValue)) {
    validLabel.innerHTML = "Valid";
    validLabel.className = "valid";

    validContainer.className = "valid_info";
  } else {
    validLabel.innerHTML = "InValid";
    validLabel.className = "in_valid";

    validContainer.className = "invalid_info";
  }
};

checkbtn.addEventListener("click", validateCard);
