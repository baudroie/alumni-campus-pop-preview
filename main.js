const menu = document.querySelector('#mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const dialog = document.querySelector('.consult-dialog');
let dialogTrigger;
function setMenu(open, restore = false) {
  menu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  if (open) menu.querySelector('a').focus();
  else if (restore) menuToggle.focus();
}
menuToggle.addEventListener('click', () => setMenu(menu.hidden));
document.querySelector('.menu-close').addEventListener('click', () => setMenu(false, true));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
  if (!menu.hidden && !menu.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) { event.preventDefault(); setMenu(false, true); }
});
window.matchMedia('(max-width:800px)').addEventListener('change', () => setMenu(false));
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
const modeButtons = [...document.querySelectorAll('.reading-toggle,[data-text-mode]')];
modeButtons.forEach(button => button.addEventListener('click', () => {
  const isText = document.body.classList.toggle('text-mode');
  setMenu(false);
  modeButtons.forEach(control => {
    control.setAttribute('aria-pressed', String(isText));
    control.textContent = isText ? 'デザイン版に戻る' : 'テキスト版で読む';
  });
  document.querySelector('.reading-toggle').focus();
  window.scrollTo({ top: 0, behavior: 'instant' });
}));
