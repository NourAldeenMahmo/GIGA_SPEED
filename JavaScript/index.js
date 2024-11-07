const collapsibleIcons = document.querySelectorAll(".Icon_footer");
collapsibleIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const list = this.parentElement.nextElementSibling;
    list.classList.toggle("visible");
    this.classList.toggle("rotated");
  });
});

const menuIcon = document.querySelector(".Icon_minu");
const menuList = document.querySelector(".link_nav");
menuIcon.addEventListener("click", function () {
  menuList.classList.toggle("visible");
});

AOS.init();
