const projects = [
  {
    client: 'Andrade Propiedades',
    description: 'Website of an important real estate agency in Chile, it has a complete catalog of homes and a map of their locations, it has an intelligent search engine where you can search for multiple combinations of specifications.',
    image: 'andrade-propiedades.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    link: 'http://www.andradepropiedades.com/',
    source: 'https://github.com/mgmediaweb',
  },
  {
    client: 'Doctor Caps Mexico',
    description: "Sales solution and monitoring of the status of each client's project, uses QR code reading.",
    image: 'erp-doctorcaps.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    link: 'http://www.doctorcapsmexico.com/',
    source: 'https://github.com/mgmediaweb',
  },
  {
    client: 'Agua Quitral',
    description: 'Complete ERP system, tracks sales and dispatches, optimizes routes and deliveries to distributors.',
    image: 'erp-quitral.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    link: 'http://www.aguaquitral.cl/',
    source: 'https://github.com/mgmediaweb',
  },
  {
    client: 'Dymark Mexico',
    description: 'Ecommerce system for the sale of products organized by categories, brands and sizes for homes such as food services.',
    image: 'ecommerce-dymark.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    link: 'http://www.dymarkmexico.com/',
    source: 'https://github.com/mgmediaweb',
  },
  {
    client: 'Inmobiliaria Mataquito',
    description: 'Website listing properties available for rent, identifies their locations and nearby points of interest on a map.',
    image: 'web-inmobiliaramataquito.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    link: 'http://www.imataquito.cl/',
    source: 'https://github.com/mgmediaweb',
  },
  {
    client: 'Liceo Nuevo Horizonte',
    description: 'Education system that shows various attached documents in interconnected galleries, teachers and bookstores.',
    image: 'web-liceonuevohorizonte.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    link: 'http://www.lnuevohorizonte.cl/',
    source: 'https://github.com/mgmediaweb',
  },
  {
    client: 'Hosteria la Fama',
    description: 'Traditional restaurant website, innovative and thematic design that makes the user feel physically there.',
    image: 'web-hosterialafama.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery'],
    link: 'http://www.hosterialafama.cl/',
    source: 'https://github.com/mgmediaweb',
  },
];

const modal = document.querySelector('#modalWin');
const mobileMenu = document.querySelector('#mobile_menu');
const mobileMenuBtnOpen = document.querySelector('.movil-menu');
const mobileMenuBtnClose = document.querySelector('#mobile_button');
const form = document.getElementById('contactForm');
const email = document.getElementById('email');
const alert = document.getElementById('alertWin');

const menuClose = () => {
  mobileMenu.classList.remove('menu_show');
  mobileMenu.classList.add('menu_hide');
};
const menuOpen = () => {
  mobileMenu.classList.remove('menu_hide');
  mobileMenu.classList.add('menu_show');
};

const goto = (section) => {
  window.location.replace(`#${section}`);
  menuClose();
};

const modalClose = (opc = false) => {
  if (opc) {
    modal.classList.remove('modal_show');
    modal.classList.add('modal_hide');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }
};

const modalOpen = (num = null) => {
  if (num != null) {
    const langs = projects[num].languages;
    let showLangs = '';

    langs.forEach((item) => { showLangs += `<li>${item}</li>`; });

    document.getElementById('modal_title').innerHTML = projects[num].client;
    document.getElementById('modal_image').src = `Assets/portfolio/${projects[num].image}`;
    document.getElementById('modal_description').innerHTML = projects[num].description;
    document.getElementById('modal_lang').innerHTML = showLangs;
    document.getElementById('modal_live').href = projects[num].link;
    document.getElementById('modal_source').href = projects[num].source;

    modal.style.display = 'flex';

    setTimeout(() => {
      modal.classList.remove('modal_hide');
      modal.classList.add('modal_show');
    }, 100);
  }
};

mobileMenuBtnClose.addEventListener('click', menuClose);
mobileMenuBtnOpen.addEventListener('click', menuOpen);
email.addEventListener('keyup', () => { alert.style.display = 'none'; });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailVal = email.value.trim();

  if (!emailRegex.test(emailVal)) {
    email.focus();
    alert.style.display = 'block';
  } else {
    // form.submit();
  }
});

goto('cover');
modalOpen();
modalClose();