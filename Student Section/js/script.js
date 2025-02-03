const menuItems = [
    { id: 1, name: "Fries", price: 10, image: "./image/1.jpg" },
    { id: 2, name: "Veg Noodles", price: 12, image: "./image/2.webp" },
    { id: 3, name: "Egg Noodles", price: 12, image: "./image/3.jpg" },
    { id: 4, name: "Veg club Sandwich", price: 12, image: "./image/4.jpg" },
    { id: 5, name: "Paneer Sandwich", price: 10, image: "./image/5.jpg" },
    { id: 6, name: "Veg Roll", price: 12, image: "./image/6.jpg" },
    { id: 7, name: "Egg Roll", price: 11, image: "./image/7.jpg" },
    { id: 8, name: "Veg Rice", price: 11, image: "./image/8.jpg" },
    { id: 9, name: "Egg Rice", price: 11, image: "./image/9.jpg" },
    { id: 10, name: "Drinks", price: 11, image: "./image/10.jpg" },
  ];
  
  let cart = [];
  
  function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const exists = cart.find(i => i.id === itemId);
    if (exists) {
      exists.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    console.log("Cart:", cart);
  }
  
  function renderMenu() {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = "";
    var pos="left";
    menuItems.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.onclick=addToCart(item.id);
      
      
      menuItem.className = `menu-item-block ${pos}`;
      menuItem.innerHTML = `
      
      <div class="menu-item">
        <div><h4>${item.name}</h4></div>
        <div><p>$${item.price}</p></div></div>
        <div class="image-container"><img width="400" height="400" src="${item.image}" alt="${item.name}" class="menu-image" /></div>
      `;
      menuContainer.appendChild(menuItem);
      if(pos=="left"){
        pos="right";
      }else{
        pos="left";
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderMenu);
  