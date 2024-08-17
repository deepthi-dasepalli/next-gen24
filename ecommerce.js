const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "kalamkari",
    price: 28.5,
    colors: [
      {
        code: "black",
        img: "https://th.bing.com/th/id/OIP.DM3MkCalI-iLKKPRtocXqAHaLG?rs=1&pid=ImgDetMain",
      },
      {
        code: "darkblue",
        img: "https://th.bing.com/th/id/OIP.pJ5bO3S4Oz85ayt_sGKaBQHaLF?w=202&h=302&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      },
    ],
  },
  {
    id: 2,
    title: "pochampally",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://pochampallysarees.com/cdn/shop/files/pure-pochampally-ikat-silk-saree-cream-purple-pochampallysarees-com.jpg?v=1708156832&width=750",
      },
      {
        code: "green",
        img: "https://pochampallysarees.com/cdn/shop/files/pure-pochampally-ikat-silk-saree-cream-purple-pochampallysarees-com.jpg?v=1708156832&width=750",
      },
    ],
  },
  {
    id: 3,
    title: "dharmavaram",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://th.bing.com/th?id=OPAC.Bj32N1sSXBF3jQ474C474&w=220&h=210&c=17&o=5&dpr=1.5&pid=21.1",
      },
      //{
      //  code: "green",
      //  img: "https://img0.junaroad.com/uiproducts/20732994/zoom_1-1703952274.jpg",
      //},
    ],
  },
  {
    id: 4,
    title: "chiffon",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/3/2395sr16-sw-516.jpg",
      },
       {
        code: "lightgray",
         img: "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/3/2395sr16-sw-516.jpg",

       },
    ],
  },
  {
    id: 5,
    title: "georgette",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://th.bing.com/th/id/OIP.6UExyLIYU-CeiE4xbJ0kIwHaKt?w=202&h=293&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      },
      {
        code: "black",
        img: "https://th.bing.com/th/id/OIP.6UExyLIYU-CeiE4xbJ0kIwHaKt?w=202&h=293&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});