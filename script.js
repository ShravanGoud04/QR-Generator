let form = document.querySelector("form");

let size = document.querySelector("#size");
let input = document.querySelector("#input");
let img = document.querySelector("img");

let fetching = async (e) => {
  e.preventDefault();
  let response = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`
  );
  console.log(response);
  img.setAttribute("src", response.url);
  form.reset();
};

form.addEventListener("submit", fetching);
