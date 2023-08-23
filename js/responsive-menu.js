document.addEventListener('DOMContentLoaded', () => {
  const closeMenu = document.querySelector('.close-menu');
  const navList = document.querySelector('.nav-list');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.nav-list li');
  const header = document.querySelector('.header');
  const scrollThreshold = 200; // Altura de rolagem em pixels para fixar o cabeçalho

  window.addEventListener('scroll', () => {
    if (window.scrollY >= scrollThreshold) {
      header.classList.add('fixed-header', 'fixed-header-animation');
    } else {
      header.classList.remove('fixed-header', 'fixed-header-animation');
    }
  });

  function animateLinks() {
    navLinks.forEach((link) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
    });
  }

  function handleClick() {
    animateLinks();
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (!navList.classList.contains('active')) {
      navLinks.forEach(link => {
        link.style.animation = '';
      });
    }

    navLinks.forEach(link => {
      link.classList.toggle('active');
    });
  }

  if (mobileMenu) {
    mobileMenu.addEventListener('click', handleClick);
  }

  closeMenu.addEventListener('click', () => {
    closeMobileMenu();
  });

  // Função para fechar o menu móvel
  function closeMobileMenu() {
    navList.classList.remove('active');
    mobileMenu.classList.remove('active');
    navLinks.forEach(link => {
      link.style.animation = '';
    });
  }

  // Adicione um evento de clique para cada link de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
});
