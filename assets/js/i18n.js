/* INTERNACIONALIZAÇÃO
----------------------------------------------------- */
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