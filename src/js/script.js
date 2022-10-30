const body = document.querySelector('body')
const main = document.querySelector('.main')
const themeLink = document.querySelector('.theme')
const languageLink = document.querySelector('.language')
const navItemsMain = Array.from(document.querySelectorAll('.down'))
const navItems = document.querySelector('.nav__items')
const allNavItemsMain = Array.from(document.querySelectorAll('.nav__item-main'))
const ulItemsDown = Array.from(document.querySelectorAll('.nav__items-down'))
const navItemsDown = document.querySelectorAll('.nav__item-down')
const navItemsMobileMain = Array.from(document.querySelectorAll('.mobile-down'))
const allMobileItemsMain = Array.from(
	document.querySelectorAll('.nav__mobile-main')
)
const ulItemsMobileDown = Array.from(
	document.querySelectorAll('.nav__mobile-items-down')
)
const navBurger = document.querySelector('.nav__burger')
const navMobileItems = document.querySelector('.nav__mobile-items')
const specialityImg = document.querySelector('.speciality-photo')
const specialityEnlarge = document.querySelector('.fa-magnifying-glass-plus')
const specialityClose = document.querySelector('.speciality-closing-info')
const coursesTitle = document.querySelectorAll('.courses__title')
const coursesContent = document.querySelectorAll('.courses__content')
const year = document.querySelector('.year')

const changeTheme = () => {
	if (body.getAttribute('data-mode') === 'dark') {
		body.setAttribute('data-mode', 'light')
	} else {
		body.setAttribute('data-mode', 'dark')
	}
}

for (let i = 0; i < navItemsMain.length; i++) {
	const showItemsDown = (e) => {
		ulItemsDown.forEach((item) => {
			if (ulItemsDown.indexOf(item) !== navItemsMain.indexOf(e.target)) {
				item.classList.remove('nav-active')
			} else {
				item.classList.toggle('nav-active')
			}
		})
		removeItemsDown(e)
	}
	navItemsMain[i].addEventListener('click', showItemsDown)
}

const highlightNavMain = () => {
	switch (true) {
		case main.classList.contains('home'):
			allNavItemsMain[0].classList.add('menu-item-active')
			break
		case main.classList.contains('courses'):
			allNavItemsMain[1].classList.add('menu-item-active')
			break
		case main.classList.contains('speciality'):
			allNavItemsMain[2].classList.add('menu-item-active')
			break
		case main.classList.contains('staff'):
			allNavItemsMain[3].classList.add('menu-item-active')
			break
		case main.classList.contains('research'):
			allNavItemsMain[4].classList.add('menu-item-active')
			break
		case main.classList.contains('labs'):
			allNavItemsMain[5].classList.add('menu-item-active')
			break
	}
}

const removeItemsDown = (e) => {
	if (e.target !== navItems && allNavItemsMain.indexOf(e.target) === -1) {
		ulItemsDown.forEach((item) => item.classList.remove('nav-active'))
	}
}

for (let i = 0; i < navItemsMobileMain.length; i++) {
	const showItemsMobileDown = (e) => {
		ulItemsMobileDown.forEach((item) => {
			if (
				ulItemsMobileDown.indexOf(item) !== navItemsMobileMain.indexOf(e.target)
			) {
				item.classList.remove('mobile-down-active')
			} else {
				item.classList.toggle('mobile-down-active')
			}
		})
	}

	navItemsMobileMain[i].addEventListener('click', showItemsMobileDown)
}

const showMobileItems = () =>
	navMobileItems.classList.toggle('nav-mobile-active')

const highlightMobileMain = () => {
	switch (true) {
		case main.classList.contains('home'):
			allMobileItemsMain[0].classList.add('menu-item-active')
			break
		case main.classList.contains('courses'):
			allMobileItemsMain[1].classList.add('menu-item-active')
			break
		case main.classList.contains('speciality'):
			allMobileItemsMain[2].classList.add('menu-item-active')
			break
		case main.classList.contains('staff'):
			allMobileItemsMain[3].classList.add('menu-item-active')
			break
		case main.classList.contains('research'):
			allMobileItemsMain[4].classList.add('menu-item-active')
			break
		case main.classList.contains('labs'):
			allMobileItemsMain[5].classList.add('menu-item-active')
			break
	}
}

const removeMobileItemsDown = () => {
	if (navMobileItems.classList.contains('nav-mobile-active')) {
		return
	} else {
		ulItemsMobileDown.forEach((ulItem) =>
			ulItem.classList.remove('mobile-down-active')
		)
	}
}

const enlargeImg = () => {
	specialityEnlarge.style.display = 'none'
	specialityClose.style.display = 'block'
	specialityImg.classList.add('speciality-enlarge')
}

const closeImg = () => {
	specialityEnlarge.style.display = 'block'
	specialityClose.style.display = 'none'
	specialityImg.classList.remove('speciality-enlarge')
}

for (let i=0; i<coursesTitle.length; i++)
{
	const showCoursesContent = () => coursesContent[i].classList.toggle('courses-visible')

	coursesTitle[i].addEventListener('click', showCoursesContent)
}

const displayYear = () => {
	const getYear = new Date()
	year.textContent = getYear.getFullYear()
}

themeLink.addEventListener('click', changeTheme)
window.addEventListener('click', removeItemsDown)
navBurger.addEventListener('click', showMobileItems)
navBurger.addEventListener('click', removeMobileItemsDown)
window.addEventListener('DOMContentLoaded', highlightNavMain)
window.addEventListener('DOMContentLoaded', highlightMobileMain)
window.addEventListener('DOMContentLoaded', displayYear)
specialityEnlarge.addEventListener('click', enlargeImg)
specialityImg.addEventListener('click', closeImg)
specialityClose.addEventListener('click', closeImg)
