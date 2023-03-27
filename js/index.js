var elForm = document.querySelector(".left-form");
var el1Input = document.querySelector(".job-1-input");
var el2Input = document.querySelector(".job-2-input");
var el3Input = document.querySelector(".job-3-input");
var elRightList = document.querySelector(".right-card");
var allCards = [];

function addLi(companyName, salary, jobTitle) {
  var elLi = document.createElement("li");
  elLi.className = "";
  elRightCard.appendChild(elLi);

  var elTitle = document.createElement("h3");
  elTitle.textContent = jobTitle;
  elTitle.className ="";
  elLi.appendChild(elTitle);

  var elCompanyName = document.createElement("p");
  elCompanyName.className = "";
  elCompanyName.textContent = "Company: ";
  elLi.appendChild(elCompanyName);

  var elCompanyNameB = document.createElement("b");
  elCompanyNameB.textContent = companyName;
  elCompanyName.appendChild(elCompanyNameB);

  var elSalary = document.createElement("p");
  elSalary.className = "";
  elSalary.textContent = "Company: ";
  elLi.appendChild(elSalary);

  var elSalaryB = document.createElement("b");
  elSalaryy.textContent = salary;
  elSalary.appendChild(elSalaryy);
}
addLi("Tesla", "450 000$/yr", "Data Scientist");
addLi("Yandex", "225 000$/yr", "Software Engineer");

elForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var newCard = {
    id: allCards.length + 1,
    companyName: el1Input.value.trim(),
    jobTitle: el2Input.value.trim(),
    salary: el3Input.value.trim(),
  };

  allCards.push(newCard);

  addLi(newCard.companyName, newCard.salary, newCard.jobTitle);

  el1Input.value = null;
  el2Input.value = null;
  el3Input.value = null;
});

