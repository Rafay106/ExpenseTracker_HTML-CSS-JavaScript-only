function toggleDisplay(id) {
  const display = document.getElementById(id).style;
  if (display.display === "" || display.display === "none") {
    display.display = "block";
  } else {
    display.display = "none";
  }
}

function updateCategories(ctgName, amt) {
  let ctg = document.getElementById(ctgName);
  ctg.innerText = parseInt(ctg.innerText) + parseInt(amt);
}

function createExpense(e) {
  e.preventDefault();
  let amt = document.getElementById("amt").value;
  let ctg = document.getElementById("ctg-select").value;
  updateCategories(ctg, amt);

  const table = document.getElementById("expense-table");
  const row = table.insertRow();
  row.insertCell().innerHTML = amt;
  row.insertCell().innerHTML = ctg;
  row.insertCell().innerHTML = document.getElementById("date").value;
  row.insertCell().innerHTML = document.getElementById("note").value;
}

function createCategory(e) {
  e.preventDefault();
  let newCtg = document.getElementById("ctg-name").value;
  document.getElementsByClassName("categories-list")[0].innerHTML += `
  <p>${newCtg} - <span id="${newCtg.toLowerCase()}"> 0 </span>Rs. spent</p>
  `;
  let select = document.getElementById("ctg-select");
  let option = document.createElement("option");
  option.value = newCtg.toLowerCase();
  option.text = newCtg;
  select.add(option);
}
