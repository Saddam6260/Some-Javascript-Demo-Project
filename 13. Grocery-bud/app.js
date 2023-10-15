// Selector
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// *** Edit Option
let editElement;
let editFlag = false;
let editId = "";
// *** Event Listener
form.addEventListener("submit", addItem);
// *** Function
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");

    const attr = document.createAttribute("data-id");
    element.setAttributeNode(attr);

    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
    // Append Child
    groceryList.appendChild(element);
    // Display Alert
    displayAlert("Added to the list", "success");
    // Display Container 
    container.classList.add("show-container");
    // Add Local Storage
    addToLocalStorage();
    // Set to back default
    setToBackDefault();
  } else if (value && editFlag) {
    console.log("Edit items");
  } else {
    displayAlert("emply string", "danger");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
// *** Set To Back Default
function setToBackDefault() {
  console.log("Set to back default")
}
// *** Local Storage
// *** Setup Items
