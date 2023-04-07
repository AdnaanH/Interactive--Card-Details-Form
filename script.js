const cardNumber = document.querySelector(".card-number");
const numberInp = document.getElementById("number-input");
const nameInp = document.getElementById("card-name");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const monthInp = document.getElementById("date");
const yearInp = document.getElementById("year-input");
const cardCvc = document.getElementById("cvc-number");
const cvcInp = document.getElementById("cvc-number-entered");
const submitBtn = document.querySelector(".btn");
const compeleted = document.querySelector(".success");
const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();
    if (!nameInp.value) {
      nameInp.classList.add('err');
      nameInp.parentElement.classList.add("error")
    } else {
      nameInp.classList.remove("err");
      nameInp.parentElement.classList.remove("error");
    }
    if (!numberInp.value) {
      numberInp.classList.add('err')
      numberInp.parentElement.classList.add("error");
    } else if (numberInp.value.length < 16) {
        numberInp.classList.add("err")
    } else {
      numberInp.classList.remove("err");
      numberInp.parentElement.classList.remove("error");
    }
    if (!monthInp.value) {
      monthInp.classList.add("err")
      monthInp.parentElement.classList.add("error");
    } else {
      monthInp.classList.remove("err");
      monthInp.parentElement.classList.remove("error");
    }
    if (!yearInp.value) {
      yearInp.classList.add("err")
      yearInp.parentElement.classList.add("error");
    } else {
      yearInp.classList.remove("err");
      yearInp.parentElement.classList.remove("error");
    }
    if (!cvcInp.value) {
      cvcInp.classList.add("err")
      cvcInp.parentElement.classList.add("error");
    } else {
      cvcInp.classList.remove("err");
      cvcInp.parentElement.classList.remove("error");
    }
    if (
      nameInp.value &&
      numberInp.value &&
      monthInp.value &&
      yearInp.value &&
      cvcInp.value &&
      numberInp.value.length == 16
    ) {
      compeleted.classList.remove("hidden");
      form.classList.add("hidden");
    }
  
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
