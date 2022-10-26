const navMenu = document.querySelector(".navigation-menu");

const navItems = [
  `<li><a href="#"> Pizza Burgers </a></li>`,
  `<li><a href="#"> Barbecue Turkey Meatballs </a></li>`,
];

export default function addMenuItems() {
  const navStr = navItems.map((item) => item);
  return navMenu.insertAdjacentHTML(
    "afterbegin",
    navStr.toString().split(",").join("")
  );
}
