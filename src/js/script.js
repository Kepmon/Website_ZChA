const body = document.querySelector('body');
const themeLink = document.querySelector('.theme');
const languageLink = document.querySelector('.language');
const navItemsMain = Array.from(document.querySelectorAll('.down'));
const ulItemsDown = Array.from(document.querySelectorAll('.nav__items-down'));
const navItemsDown = document.querySelectorAll('.nav__item-down');
const navItemsMobileMain = Array.from(document.querySelectorAll('.mobile-down'))
const ulItemsMobileDown = Array.from(
	document.querySelectorAll('.nav__mobile-items-down')
);
const navBurger = document.querySelector('.nav__burger');
const navMobileItems = document.querySelector('.nav__mobile-items');
const year = document.querySelector('.year')

const changeTheme = () => {
	if (body.getAttribute('data-mode') === 'dark') {
		body.setAttribute('data-mode', 'light');
	} else {
		body.setAttribute('data-mode', 'dark');
	}
};

for (let i = 0; i < navItemsMain.length; i++) {
	const showItemsDown = (e) => {
		ulItemsDown.forEach((item) => {
			if (ulItemsDown.indexOf(item) !== navItemsMain.indexOf(e.target)) {
				item.classList.remove('nav-active');
			}
			else
			{
				item.classList.toggle('nav-active');
			}
		});
		removeItemsDown(e);
	};
	navItemsMain[i].addEventListener('click', showItemsDown);
}

const removeItemsDown = (e) => {
	const navItems = document.querySelector('.nav__items');
	const allNavItemsMain = Array.from(
		document.querySelectorAll('.nav__item-main')
	);

	if (e.target !== navItems && allNavItemsMain.indexOf(e.target) === -1) {
		ulItemsDown.forEach((item) => item.classList.remove('nav-active'));
	}
};

for (let i = 0; i < navItemsMobileMain.length; i++) {
	const showItemsMobileDown = e => {
		ulItemsMobileDown.forEach((item) => {
			if (ulItemsMobileDown.indexOf(item) !== navItemsMobileMain.indexOf(e.target)) {
				item.classList.remove('mobile-down-active');
			}
			else
			{
				item.classList.toggle('mobile-down-active');
			}
		})
		console.log(e.target);
	}

	navItemsMobileMain[i].addEventListener('click', showItemsMobileDown);
}

const showMobileItems = () => navMobileItems.classList.toggle('nav-mobile-active')

const removeMobileItemsDown = () => {
	if (navMobileItems.classList.contains('nav-mobile-active')) {
		return;
	} else {
		ulItemsMobileDown.forEach((ulItem) =>
			ulItem.classList.remove('mobile-down-active')
		);
	}
};

const displayYear = () => {
	const getYear = new(Date)
	year.textContent = getYear.getFullYear()
}

themeLink.addEventListener('click', changeTheme);
window.addEventListener('click', removeItemsDown);
navBurger.addEventListener('click', showMobileItems);
navBurger.addEventListener('click', removeMobileItemsDown);
window.addEventListener('DOMContentLoaded', displayYear)
