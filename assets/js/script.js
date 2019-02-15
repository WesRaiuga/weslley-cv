/* INTERNACIONALIZAÇÃO
----------------------------------------------------- */
const btnPt = document.querySelector('#btn-pt');
const btnEn = document.querySelector('#btn-en');
const ptAll = document.querySelectorAll('[data-lang=PT]');
const enAll = document.querySelectorAll('[data-lang=EN]');

const atualizaIdioma = (idioma) => {
  if(idioma == 'PT'){
    enAll.forEach(element => {
      element.classList.add('hide');
    });
    ptAll.forEach(element => {
      element.classList.remove('hide');
    });
  } else if (idioma == 'EN'){
    ptAll.forEach(element => {
      element.classList.add('hide');
    });
    enAll.forEach(element => {
      element.classList.remove('hide');
    });    
  }
};

btnEn.onclick = () => {
    atualizaIdioma('EN');
};
btnPt.onclick = () => {
    atualizaIdioma('PT');
};

/* MENU STICKY
----------------------------------------------------- */
const menu = document.querySelector("#menu");
const secao1 = document.querySelector("#sobre-mim");
let sticky = menu.offsetTop;

window.addEventListener("scroll", () => {
  fixarMenu();
});

const fixarMenu = () => {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky");
    secao1.classList.add("desgrudar");
  } else {
    menu.classList.remove("sticky");
    secao1.classList.remove("desgrudar");
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

/* TABS DA SEÇÃO PROJETOS
----------------------------------------------------- */
const tabLinks = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks[0].onclick = () => {
  showContent(0, 1, 2);
  activeTab(0, 1, 2);
};
tabLinks[1].onclick = () => {
  showContent(1, 0, 2);
  activeTab(1, 0, 2);
};
tabLinks[2].onclick = () => {
  showContent(2, 1, 0);
  activeTab(2, 1, 0);
};

const showContent = (show, hide1, hide2) => {
  tabContents[show].classList.add('active');
  tabContents[hide1].classList.remove('active');
  tabContents[hide2].classList.remove('active');
};

const activeTab = (active, inactive1, inactive2) => {
  tabLinks[active].classList.add('active');
  tabLinks[inactive1].classList.remove('active');
  tabLinks[inactive2].classList.remove('active');
};