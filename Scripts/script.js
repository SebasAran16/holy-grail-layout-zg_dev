function buttonClick() {
  alert("The JS works!");
}

function toggleNav() {
  let grid = document.querySelector(".outer-grid");
  console.log(grid.classList);
  grid.classList.toggle("outer-grid-expanded");

  let nav = document.querySelector("nav");
  nav.classList.toggle("hidden-nav");
}
