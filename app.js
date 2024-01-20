// selecting DOM elements
const inputBill = document.getElementById("bill");
const btns = document.querySelectorAll(".btn");
const inputCustom = document.getElementById("custom");
const inputPeople = document.getElementById("number");
const ERROR = document.querySelector(".error");
const amountResult = document.querySelector(".amount-result");
const totalResult = document.querySelector(".total-result");
const resetBtn = document.getElementById("reset");

// add event listener
btns.forEach((btn) => {
  btn.addEventListener("click", clacBill);
});
resetBtn.addEventListener("click", reset);
inputCustom.addEventListener("input", customCalculation);

// function to calc the bill with buttons
function clacBill(e) {
  e.preventDefault();
  const element = e.currentTarget;
  const percentage = parseInt(element.textContent);
  const bill = parseFloat(inputBill.value);
  const people = parseFloat(inputPeople.value);

  if (isNaN(people) || isNaN(bill)) {
    inputPeople.classList.add("border-red");
    ERROR.classList.add("block");
    return;
  }

  if (element) {
    const tipAmount = (bill * percentage) / 100 / people;
    const total = (bill + (bill * percentage) / 100) / people;
    amountResult.textContent = `$${parseFloat(tipAmount.toFixed(2))}`;
    totalResult.textContent = `$${parseFloat(total.toFixed(2))}`;
    inputPeople.classList.remove("border-red");
    ERROR.classList.remove("block");
  }
}

// function to set back everything to the default value
function reset() {
  amountResult.textContent = "$0.00";
  totalResult.textContent = "$0.00";
}

// custom calculation, with custom percentage value
function customCalculation(e) {
  e.preventDefault();
  const customPercentage = parseFloat(inputCustom.value);
  const bill = parseFloat(inputBill.value);
  const people = parseFloat(inputPeople.value);

  if (customPercentage) {
    const tipAmount = (bill * customPercentage) / 100 / people;
    const total = (bill + (bill * customPercentage) / 100) / people;
    amountResult.textContent = `$${parseFloat(tipAmount.toFixed(2))}`;
    totalResult.textContent = `$${parseFloat(total.toFixed(2))}`;
  }
}
