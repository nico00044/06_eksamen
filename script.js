//Burgermenu
const burger = document.querySelector(".burger"); //finder burgermenu-knappen (stregerne)
const nav = document.querySelector("nav"); //finder menuen (naigationen)
const menu = document.querySelector(".menu"); //finder menu området

burger.addEventListener("click", burgerClick); //lytter efter klik på burger
function burgerClick() {
  burger.classList.toggle("active"); //Burgermenuen åbner/lukker=toggle
  nav.classList.toggle("active"); //Menu navigation åbner/lukker=toggle
}
menu.addEventListener("click", menuClick); //lytter efter klik på menuen
function menuClick() {
  burger.classList.remove("active"); //remove fjerner den aktive del ved burgermenuen
  nav.classList.remove("active"); //remove fjerner den aktive del ved menu navigation
}

// Menu streg

//koden bliver brugt, når HTML er indlæst
document.addEventListener("DOMContentLoaded", function () {
  //Den tager a elementer som findes i class .menu
  const menuLinks = document.querySelectorAll(".menu a");
  //den henter stien (pathname) fra den nuværende side (fx. portfolio)
  const currentPath = window.location.pathname;
  //gennemgår de andre sider - derfor ingen farveskift ved dem
  menuLinks.forEach((link) => {
    //tager fat i hver enkelte ting og sammenligner
    if (link.pathname === currentPath) {
      //active gør af farveskiftet bliver ved med at være der
      link.classList.add("active");
    }
  });
});
