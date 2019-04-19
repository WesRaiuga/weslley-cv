/* MENU STICKY
----------------------------------------------------- */
const menu = document.querySelector("#menu");
const secao1 = document.querySelector("#sobre-mim");
let sticky = menu.offsetTop;

const fixarMenu = () => {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky");
    secao1.classList.add("desgrudar");
  } else {
    menu.classList.remove("sticky");
    secao1.classList.remove("desgrudar");
  }
};

window.addEventListener("scroll", () => {
  fixarMenu();
});

/* MENU MOBILE
----------------------------------------------------- */
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMobile = document.querySelector('.filtros.mobile');

menuHamburguer.onclick = () => {
  menuHamburguer.classList.toggle('ativo');
  navMobile.classList.toggle('ativo');
}