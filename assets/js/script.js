/* MENU STICKY
----------------------------------------------------- */
let menu = document.getElementById("menu");
let sticky = menu.offsetTop;

window.onscroll = () => {
    fixarMenu()
};

const fixarMenu = () => {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
};

/* MENU MOBILE
----------------------------------------------------- */
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMobile = document.querySelector('.filtros.mobile');

menuHamburguer.onclick = () => {
  menuHamburguer.classList.toggle('ativo');
  navMobile.classList.toggle('ativo');
}

/* EFEITO SMOOTH
----------------------------------------------------- */