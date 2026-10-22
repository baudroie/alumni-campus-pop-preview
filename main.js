'use strict';
const menu = document.querySelector('#mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const dialog = document.querySelector('.consult-dialog');
let dialogTrigger;
function setMenu(open, restoreFocus = false) {
  menu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  if (open) menu.querySelector('a').focus();
  else if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => setMenu(menu.hidden));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
  if (!menu.hidden && !menu.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) { event.preventDefault(); setMenu(false, true); }
});
window.matchMedia('(max-width:1000px)').addEventListener('change', () => setMenu(false));
document.querySelectorAll('[data-consult]').forEach(button => button.addEventListener('click', () => {
  dialogTrigger = button;
  setMenu(false);
  dialog.showModal();
  dialog.querySelector('.dialog-close').focus();
}));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  if (dialogTrigger && menu.contains(dialogTrigger)) menuToggle.focus();
  else dialogTrigger?.focus();
});
