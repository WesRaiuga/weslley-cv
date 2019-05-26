/* TABS DA SEÇÃO PROJETOS
----------------------------------------------------- */
const tabLinks = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

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