const projects = [
  {
    client: 'Andrade Propiedades',
    description: 'Website of an important real estate agency in Chile, it has a complete catalog of homes and a map of their locations, it has an intelligent search engine where you can search for multiple combinations of specifications.',
    image: 'andrade-propiedades.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
  },
  {
    client: 'Doctor Caps Mexico',
    description: "Sales solution and monitoring of the status of each client's project, uses QR code reading.",
    image: 'erp-doctorcaps.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
  },
  {
    client: 'Agua Quitral',
    description: 'Complete ERP system, tracks sales and dispatches, optimizes routes and deliveries to distributors.',
    image: 'erp-quitral.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
  },
  {
    client: 'Dymark Mexico',
    description: 'Ecommerce system for the sale of products organized by categories, brands and sizes for homes such as food services.',
    image: 'ecommerce-dymark.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
  },
  {
    client: 'Inmobiliaria Mataquito',
    description: 'Website listing properties available for rent, identifies their locations and nearby points of interest on a map.',
    image: 'web-inmobiliaramataquito.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
  },
  {
    client: 'Liceo Nuevo Horizonte',
    description: 'Education system that shows various attached documents in interconnected galleries, teachers and bookstores.',
    image: 'web-liceonuevohorizonte.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
  },
  {
    client: 'Hosteria la Fama',
    description: 'Traditional restaurant website, innovative and thematic design that makes the user feel physically there.',
    image: 'web-hosterialafama.jpg',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery'],
  },
];

const modal = document.querySelector('#modalWin');
const mobileMenu = document.querySelector('#mobile_menu');
const mobileMenuBtnOpen = document.querySelector('.movil-menu');
const mobileMenuBtnClose = document.querySelector('#mobile_button');

const menuClose = () => { mobileMenu.style.display = 'none'; };
const menuOpen = () => { mobileMenu.style.display = 'block'; };

const goto = (section) => {
  window.location.replace(`#${section}`);
  menuClose();
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

    modal.style.display = 'flex';
  }
};

const modalClose = (opc = false) => {
  if (opc) modal.style.display = 'none';
};

mobileMenuBtnClose.addEventListener('click', menuClose);
mobileMenuBtnOpen.addEventListener('click', menuOpen);
goto('cover');
modalOpen();
modalClose();