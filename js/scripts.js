 // Shows and hides the navigation menu
 let menu = document.querySelector('.menu');
  let navbar = document.querySelector('#nav'); 
 if (menu && navbar) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('clicked');
    navbar.classList.toggle('show');
  });
}
// Controls opening and closing of the cart
const openShopButton = document.querySelector('#shopBtn');
const cart = document.querySelector('.cart1');
const overlay = document.querySelector('.overlay');
const closeCartElements = document.querySelectorAll('.close-cart');
 const openCart = () => {
    openShopButton.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        cart.classList.add('active');
        overlay.classList.add('active');
    })
 };
 const closeCart =() => {
    closeCartElements.forEach((item) => {
        item.addEventListener('click', () => {
            document.body.style.overflow ='';
            cart.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
 };
openCart();
closeCart();
 

document.addEventListener("DOMContentLoaded", function () {
//selecting main cart elements
const shopBtn = document.getElementById("shopBtn");
const cart = document.querySelector(".cart1");
const overlay = document.querySelector(".overlay");
const closeBtn = document.getElementById("cart-close");
// open the cart and making the backgroung dark
shopBtn.onclick = function () {
  cart.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
};
// closing the cart
closeBtn.onclick = function () {
  cart.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
};


overlay.onclick = function () {
  cart.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
};


  //https://youtu.be/u_iQn0hvrac?si=d8yNeWNLYqbRM33G---helping tutorial with the cart section(increasing and decreasing the item numbers,total amoint,total button)
  //adding selected products to the cart
  const buttons = document.querySelectorAll(".add-to-cart");
  const cartContent = document.querySelector(".cart-content");
  buttons.forEach(function (button) {
    button.onclick = function (e) {
      e.preventDefault();
      const card = button.closest(".card");
      const img = card.querySelector("img").src;
      const title = card.querySelector(".card-title").innerText;
      const price = card.querySelector(".card-text").innerText;
      addToCart(img, title, price);
    };
  });
  function addToCart(img, title, price) {
    const item = document.createElement("div");
    item.className = "cart-box";
    item.innerHTML = `
      <img src="${img}" class="cart-img">
      <div class="cart-detail">
        <h2 class="cart-product-title">${title}</h2>
        <span class="cart-price">${price}</span>
        <div class="cart-quantity">
          <button class="minus">-</button>
          <span class="number">1</span>
          <button class="plus">+</button>
        </div>
      </div>
      <i class="ri-delete-bin-line cart-remove"></i>
    `;
    //adding item to the cart
    cartContent.appendChild(item);
    updateTotalPrice();
    //controlling item quantity
    let quantity = 1;
    const number = item.querySelector(".number");
    //increasing
    item.querySelector(".plus").onclick = function () {
      quantity++;
      number.innerText = quantity;
      updateTotalPrice();
    };
    //deacreasing
    item.querySelector(".minus").onclick = function () {
      if (quantity > 1) {
        quantity--;
        number.innerText = quantity;
        updateTotalPrice();
      }
    };
    //removing an item
    item.querySelector(".cart-remove").onclick = function () {
      item.remove();
      updateTotalPrice();
    };
  }
  //calculating the total price
  function updateTotalPrice() {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = document.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(function (cartBox) {
      const price = parseInt(
        cartBox.querySelector(".cart-price").innerText.replace("$", "")
      );
      const quantity = parseInt(
        cartBox.querySelector(".number").innerText
      );
      total += price * quantity;
    });
    totalPriceElement.innerText = total + "$";
  }
});
//https://youtu.be/CYlNJpltjMM?si=GPnZevAZraIWHbNE---inspired and got the form tutorial
//donation form and succes message
document.addEventListener("DOMContentLoaded", function () {
  const donateBtn = document.getElementById("donateBtn");
  const payModal = document.getElementById("payModal");
  const payOverlay = document.getElementById("payOverlay");
  const successModal = document.getElementById("successModal");
  const successOverlay = document.getElementById("successOverlay");
  const successOk = document.getElementById("success");
  const form = document.getElementById("form");
  //opening the payment form
  donateBtn.onclick = function () {
    payModal.classList.add("active");
    payOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };
  //closing the payment form
  payOverlay.onclick = function () {
    payModal.classList.remove("active");
    payOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };
  //showing the message
  form.onsubmit = function (e) {
    e.preventDefault();
    payModal.classList.remove("active");
    payOverlay.classList.remove("active");
    successModal.classList.add("active");
    successOverlay.classList.add("active");
  };
  //closing succes message
  successOk.onclick = function () {
    successModal.classList.remove("active");
    successOverlay.classList.remove("active");
    document.body.style.overflow = "";
    form.reset();
  };
  successOverlay.onclick = function () {
    successModal.classList.remove("active");
    successOverlay.classList.remove("active");
    document.body.style.overflow = "";
    form.reset();
  };
});

