document.addEventListener('DOMContentLoaded', () => {
  const closeMenu = document.querySelector('.close-menu');
  const navList = document.querySelector('.nav-list');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.nav-list li');

  // Função para alterar a logo para uma versão menor
  function alterarLogo() {
    const logoImg = document.querySelector('.logo img');
    if (window.innerWidth <= 768) {
      logoImg.src = '../assets/img/logo-responsiva.png'; // Substitua pelo caminho da nova imagem
      logoImg.height = '34';
      logoImg.width = '60';
    } else if (window.innerWidth >= 768) {
      logoImg.src = '../assets/img/logo-desktop.png'; // Substitua pelo caminho da nova imagem
      logoImg.height = '80';
      logoImg.width = '80';
    }
  } 

  // Chama a função para alterar a logo quando a tela é redimensionada
  window.addEventListener('resize', alterarLogo);

  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = 'active';
  
      this.handleClick = this.handleClick.bind(this);
    }
    
    addClickEvent() {
      this.mobileMenu.addEventListener('click', this.handleClick);
    }
    
    animateLinks() {
      this.navLinks.forEach((link) => {
        link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
      });
    }

    handleClick() {
      this.animateLinks();
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);

      if (!this.navList.classList.contains(this.activeClass)) {
        this.navLinks.forEach(link => {
          link.style.animation = '';
        });
      }

      this.navLinks.forEach(link => {
        link.classList.toggle(this.activeClass);
      });
    }
    
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  
  mobileNavbar.init();
  
  closeMenu.addEventListener('click', () => {
    navList.classList.remove('active');
    mobileMenu.classList.remove('active');
    navLinks.forEach(link => {
      link.style.animation = '';
    });
  });
});
