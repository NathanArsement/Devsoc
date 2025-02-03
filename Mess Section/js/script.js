function addItem() {
    let name = document.getElementById("item-name").value;
    let price = document.getElementById("item-price").value;
    if (name.trim() === "" || price.trim() === "") {
        alert("Please enter both name and price");
        return;
    }

    let ul = document.getElementById("menu-list");
    let li = document.createElement("li");
    li.className = "menu-item";
    li.innerHTML = `${name} - ₹${price} <button onclick="editItem(this)">Edit</button> <button onclick="removeItem(this)">Remove</button>`;
    ul.appendChild(li);

    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
}

function editItem(button) {
    let li = button.parentElement;
    let text = li.firstChild.textContent.split(' - ₹');
    let newName = prompt("Edit item name:", text[0]);
    let newPrice = prompt("Edit item price:", text[1]);
    if (newName !== null && newPrice !== null) {
        li.innerHTML = `${newName} - $${newPrice} <button onclick="editItem(this)">Edit</button> <button onclick="removeItem(this)">Remove</button>`;
    }
}

function removeItem(button) {
    let li = button.parentElement;
    li.remove();
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }