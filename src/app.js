//! Toggle nav menu (mobile)
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', e => {
		if (e.target.id == 'cartBtnMobile') {
			return;
		}
		navMenu.classList.add('show-menu');
	});
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

//! Shopping Cart Logic
const cartMenu = document.querySelector('#nav-menu-cart');
const cartClose = document.getElementById('nav-close-cart');

const cart = document.getElementById('cartBtn');
cart.addEventListener('click', showCart);

const cartMobile = document.getElementById('cartBtnMobile');
cartMobile.addEventListener('click', showCart);

function showCart() {
	cartMenu.classList.add('show-menu');
	cartMenu.style.display = 'block';
}

if (cartClose) {
	cartClose.addEventListener('click', () => {
		cartMenu.classList.remove('show-menu');
		cartMenu.style.display = 'none';
	});
}

//! Hide nav menu on link selection (mobile)
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//! Border nav on scroll down
function scrollHeader() {
	const header = document.getElementById('header');

	if (this.scrollY >= 50) {
		header.classList.add('scroll-header');
	} else {
		header.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader);

//! Show/Hide back to top button depending on location
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	if (this.scrollY >= 200) {
		scrollUp.classList.add('show-scroll');
	} else {
		scrollUp.classList.remove('show-scroll');
	}
}
window.addEventListener('scroll', scrollUp);

//! Set active nav link on scroll
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
		} else {
			document
				.querySelector(`.nav__menu a[href*=${sectionId}]`)
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);
