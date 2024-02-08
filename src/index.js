// index.js

// import { data } from "happy-dom/lib/PropertySymbol";

// Callbacks
const handleClick = (ramen) => {
  // find the ramen-detail tag
  const ramenMenuDiv = document.getElementById("ramen-menu");
  // find the child with class : "detail-image"
  const detailImage = document.querySelector("#ramen-detail > .detail-image");
  // find the child with class : "name"
  const name = document.querySelector("#ramen-detail > .name");
  // find the child with class : "restaurant"
  const restaurant = document.querySelector("#ramen-detail > .restaurant");
  // find the child with class : "rating"
  const rating = document.getElementById("rating-display");
  // find the child with class : "comment"
  const comment = document.getElementById("comment-display");

  // update the img src of the detail-img
  detailImage.src = ramen.image;
  // update the text for all other fields
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  rating.textContent = ramen.rating;
  comment.textContent = ramen.comment;
};

document.addEventListener("DOMContentLoaded", (e) => {
  const submit_btn = document.getElementById("submit-button");
  submit_btn.addEventListener("click", addSubmitListener);
});

export const addSubmitListener = () => {
  let ramenDisplayNav = document.querySelector("#ramen-menu");

  const ramenMenuDivBefore = document.querySelectorAll("#ramen-menu img");
  const ramenFormName = document.querySelector("#new-ramen #new-name");
  const ramenFormRestaurant = document.querySelector(
    "#new-ramen #new-restaurant"
  );
  const ramenFormImage = document.querySelector("#new-ramen #new-image");
  const ramenFormRating = document.querySelector("#new-ramen #new-rating");
  const ramenFormComment = document.querySelector("#new-ramen #new-comment");

  const ramen = {
    name: ramenFormName.value,
    restaurant: ramenFormRestaurant.value,
    image: ramenFormImage.value,
    rating: ramenFormRating.value,
    comment: ramenFormComment.value,
  };

  addMenuItem(ramen, ramenDisplayNav);
};

//

export const displayRamens = () => {
  // get all images from the server
  fetchData().then((images) => {
    // find our #ramen-menu element in html
    let ramenDisplayNav = document.querySelector("#ramen-menu");

    // for-each image, we want to add an image tag to #ramen-menu
    Array.from(images).forEach((ramen) => {
      addMenuItem(ramen, ramenDisplayNav);
    });
  });
};

function addMenuItem(ramen, menuElement) {
  // add an <img> to the document
  let ramenImg = document.createElement("img");

  // update the "src" prop on an <img> with the filepath from db.json ramen
  ramenImg.src = ramen.image;

  // update the "alt" prop on an <img> tag with the ramen name from db.json
  ramenImg.alt = ramen.name;

  // add the class "image-nav" to the list of classes on the <img> tag
  ramenImg.classList.add("image-nav");

  // add a click event handler to the <img> tag
  ramenImg.addEventListener("click", () => {
    handleClick(ramen);
  });

  // append the <img> tag to the div#ramen-menu element
  menuElement.append(ramenImg);
}

function fetchData() {
  // return fetch("http://localhost:3000/ramens").then(async response => {
  //   const resp = await response.json();
  //   return resp.ramens;
  // });

  return fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  // displayRamens();
  // addSubmitListener();
};

main();

// Export functions for testing
// export { displayRamens, addSubmitListener, handleClick, main }
