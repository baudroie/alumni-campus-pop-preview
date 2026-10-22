'use strict';
const menu = document.querySelector('#mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
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
// Progressive enhancement: content stays visible until its one-shot animation starts.
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  const targets = [...document.querySelectorAll(
    '.hero-heading, .cta-conversation, .cta-sun, .cta-orbit'
  )];
  const visible = new Set();
  function sync(target) {
    if (target.dataset.motionState === 'done') return;
    const playing = visible.has(target) && !document.hidden;
    const art = target.querySelector('.cta-conversation-art');
    // A lazy-loaded illustration must be ready before its entrance begins.
    if (playing && (!art || art.complete)) target.dataset.motionState = 'running';
    target.style.setProperty('--motion-play', playing ? 'running' : 'paused');
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
      sync(entry.target);
    });
  }, { rootMargin: '-86px 0px 0px 0px', threshold: 0.1 });
  function onVisibilityChange() { targets.forEach(sync); }
  function finish(target) {
    target.dataset.motionState = 'done';
    target.style.removeProperty('--motion-play');
    visible.delete(target);
    observer.unobserve(target);
    if (targets.every(item => item.dataset.motionState === 'done')) {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    }
  }
  targets.forEach(target => {
    target.addEventListener('animationend', () => {
      if (target.getAnimations({ subtree: true }).every(animation => animation.playState === 'finished')) {
        finish(target);
      }
    });
    const art = target.querySelector('.cta-conversation-art');
    if (art && !art.complete) {
      art.addEventListener('load', () => sync(target), { once: true });
      art.addEventListener('error', () => sync(target), { once: true });
    }
    observer.observe(target);
  });
  document.addEventListener('visibilitychange', onVisibilityChange);
  reducedMotion.addEventListener('change', event => {
    if (event.matches) targets.forEach(finish);
  });
})();
