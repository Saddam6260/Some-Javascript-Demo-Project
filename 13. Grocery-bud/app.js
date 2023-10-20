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

// Event Listener
form.addEventListener("submit", addItem);

// Clear Items
clearBtn.addEventListener("click", clearItems);

// Function
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    // Add attrubute
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    console.log(element);

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

    // append Element
    groceryList.appendChild(element);

    //Edit Delete Option
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    console.log(deleteBtn, editBtn);

    // Display Alert
    displayAlert("success", "item Added successfully");
    // Show Container
    container.classList.add("show-container");
    // ToLocal Storage
    addToLocalStorage(id, value);
    // Set Back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;

    displayAlert("success", "edit item");
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    displayAlert("danger", "Enpty Items");
  }
}

// Display Alert
function displayAlert(action, text) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// Clear Items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      groceryList.removeChild(item);
    });
  }
  // Remove container
  container.classList.remove("show-container");
  // display Alert
  displayAlert("danger", "Clear all items");
  // Set Back to default
  setBackToDefault();
  // addtoLocalStorage
}

// Edit Items
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  editElement = e.currentTarget.parentElement.previousElementSibling;
  console.log(editElement);
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;

  submitBtn.innerHTML = "edit";
}

// Delete Items
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  groceryList.removeChild(element);

  if (groceryList.children.length === 0) {
    container.classList.remove("show-container");
    displayAlert("danger", "Clear all item");
  } else {
    displayAlert("danger", "Remove item");
  }
  setBackToDefault();
}

// Set Back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

// Local Storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  console.log(grocery); 
  // console.log(grocery);
  let items = getLocalStorage();
  console.log(items);

  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function deleteLocalStorage() {
  console.log("delete local storage");
}

function editLocalStorage() {}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// Setup Items
