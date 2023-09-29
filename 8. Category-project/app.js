const flowerItems = [
  {
    id: 1,
    name: "Fresh Flower",
    category: "fresh flower",
    price: 10.3,
    img: "./images/fresh-flower-1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 2,
    name: "Live Plant",
    category: "live plant",
    price: 10.3,
    img: "./images/live-plant-1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 3,
    name: "Fresh Flower",
    category: "fresh flower",
    price: 10.9,
    img: "./images/fresh-flower-3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 4,
    name: "Fresh Flower",
    category: "fresh flower",
    price: 10.5,
    img: "./images/fresh-flower-4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 5,
    name: "Live Plant",
    category: "live plant",
    price: 10.5,
    img: "./images/live-plant-2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 6,
    name: "Fresh Flower",
    category: "fresh flower",
    price: 11.5,
    img: "./images/fresh-flower-2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 7,
    name: "Organic Flower",
    category: "organic flower",
    price: 11.5,
    img: "./images/organic-flower-1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 8,
    name: "Organic Flower",
    category: "organic flower",
    price: 11.5,
    img: "./images/organic-flower-2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 9,
    name: "Live Plant",
    category: "live plant",
    price: 11.5,
    img: "./images/live-plant-3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
  {
    id: 10,
    name: "Organic Flower",
    category: "organic flower",
    price: 11.5,
    img: "./images/organic-flower-3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum, accusamus laudantium nulla soluta optio.",
  },
];

// Selctor
const secCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayItems(flowerItems);
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;

    const menuCategory = flowerItems.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayItems(flowerItems);
    } else {
      displayItems(menuCategory);
    }
  });
});
function displayItems(flowerItems) {
  const displayMenu = flowerItems
    .map(function (item) {
      return `
        <article class="menu-item">
        <img src=${item.img} class="photo" alt="">
        <div class="details">
          <div>
            <h3 class="name">${item.name}</h3>
            <p class="price">$${item.price}</p>
          </div>
          <p class="desc">${item.desc}</p>
        </div>
      </article> 
        `;
    })
    .join("");
  secCenter.innerHTML = displayMenu;
}
