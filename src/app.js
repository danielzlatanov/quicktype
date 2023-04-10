//! Toggle nav menu (mobile)
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

//! Shopping Cart Logic


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

// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', () => {
// 	body.classList.add('active');
// });
// closeShopping.addEventListener('click', () => {
// 	body.classList.remove('active');
// });

// let products = [
// 	{
// 		id: 1,
// 		name: 'PRODUCT NAME 1',
// 		image: '1.PNG',
// 		price: 120000,
// 	},
// 	{
// 		id: 2,
// 		name: 'PRODUCT NAME 2',
// 		image: '2.PNG',
// 		price: 120000,
// 	},
// 	{
// 		id: 3,
// 		name: 'PRODUCT NAME 3',
// 		image: '3.PNG',
// 		price: 220000,
// 	},
// 	{
// 		id: 4,
// 		name: 'PRODUCT NAME 4',
// 		image: '4.PNG',
// 		price: 123000,
// 	},
// 	{
// 		id: 5,
// 		name: 'PRODUCT NAME 5',
// 		image: '5.PNG',
// 		price: 320000,
// 	},
// 	{
// 		id: 6,
// 		name: 'PRODUCT NAME 6',
// 		image: '6.PNG',
// 		price: 120000,
// 	},
// ];
// let listCards = [];
// function initApp() {
// 	products.forEach((value, key) => {
// 		let newDiv = document.createElement('div');
// 		newDiv.classList.add('item');
// 		newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
// 		list.appendChild(newDiv);
// 	});
// }
// initApp();
// function addToCard(key) {
// 	if (listCards[key] == null) {
// 		// copy product form list to list card
// 		listCards[key] = JSON.parse(JSON.stringify(products[key]));
// 		listCards[key].quantity = 1;
// 	}
// 	reloadCard();
// }
// function reloadCard() {
// 	listCard.innerHTML = '';
// 	let count = 0;
// 	let totalPrice = 0;
// 	listCards.forEach((value, key) => {
// 		totalPrice = totalPrice + value.price;
// 		count = count + value.quantity;
// 		if (value != null) {
// 			let newDiv = document.createElement('li');
// 			newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
// 			listCard.appendChild(newDiv);
// 		}
// 	});
// 	total.innerText = totalPrice.toLocaleString();
// 	quantity.innerText = count;
// }
// function changeQuantity(key, quantity) {
// 	if (quantity == 0) {
// 		delete listCards[key];
// 	} else {
// 		listCards[key].quantity = quantity;
// 		listCards[key].price = quantity * products[key].price;
// 	}
// 	reloadCard();
// }
