const burger = document.getElementById("nav_burger_div");
const nav_items = document.getElementById("nav_items");
burger.addEventListener("click", () => {
  nav_items.classList.toggle("hide");
  console.log("clicked");
});
