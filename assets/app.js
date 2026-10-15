// No frameworks, dependencies, analytics, cookies, or remote calls.
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('nav-links');
  if(menuButton && menu) {
    const closeMenu = () => { menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Open menu'); menu.classList.remove('is-open'); };
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded',String(!expanded));
      menuButton.setAttribute('aria-label',expanded ? 'Open menu' : 'Close menu');
      menu.classList.toggle('is-open',!expanded);
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
    window.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => {if(window.innerWidth>640)closeMenu();});
  }
  const year = document.getElementById('year');
  if(year) year.textContent = String(new Date().getFullYear());
})();
