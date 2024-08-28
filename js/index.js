let navBtn = document.getElementById("nav-btn");
let navBtnImg = document.getElementById("nav-btn-img");

navBtn.addEventListener("click", () => {
  if (navBtn.classList.contains("collapsed")) {
    navBtnImg.setAttribute("src", "./assets/images/icon-menu.svg")
  } else {
    navBtnImg.setAttribute("src", "./assets/images/icon-menu-close.svg")
  }
})