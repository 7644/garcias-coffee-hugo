export function initHeader() {
  const hamburger = document.querySelector('.header__hamburger');
  const nav = document.querySelector('.header__nav');

  if (!hamburger || !nav) {
    return;
  }

  const desktopBreakpoint = window.matchMedia('(min-width: 768px)');

  function closeMenu() {
    nav.classList.remove('is-open');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const isOpen = nav.classList.toggle('is-open');

    hamburger.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', isOpen);
  }

  hamburger.addEventListener('click', toggleMenu);

  document.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', event => {
    const clickedMenu = nav.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);

    if (!clickedMenu && !clickedHamburger) {
      closeMenu();
    }
  });

  desktopBreakpoint.addEventListener('change', event => {
    if (event.matches) {
      closeMenu();
    }
  });
}