const characteristic = document.getElementById("characteristic");
const charBox = document.querySelector(".characteristic");
const documentation = document.getElementById("documentation");
const docBox = document.querySelector(".documentation");
const filterTitle = document.querySelector(".filter__btn");
const filter = document.querySelector(".filter__form");

document.addEventListener("DOMContentLoaded", function () {
  characteristic.addEventListener("click", () => {
    characteristic.classList.add("product__link-dark");
    charBox.classList.remove("display-none");
    documentation.classList.remove("product__link-dark");
    docBox.classList.add("display-none");
  });

  documentation.addEventListener("click", () => {
    documentation.classList.add("product__link-dark");
    docBox.classList.remove("display-none");
    characteristic.classList.remove("product__link-dark");
    charBox.classList.add("display-none");
  });

  if (document.documentElement.clientWidth < 992) {
    filter.classList.add("display-none");
  } else {
    filter.classList.remove("display-none");
  }

  filterTitle.addEventListener("click", () => {
    filter.classList.toggle("display-none");
  });

  filterTitle.addEventListener("click", () => {
    filter.classList.toggle("display-none");
  });
});
