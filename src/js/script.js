const body = document.querySelector('body')
const main = document.querySelector('.main')
const themeLink = document.querySelector('.theme')
const languageLink = document.querySelector('.language')
const navItemsMain = Array.from(document.querySelectorAll('.down'))
const ulItemsDown = Array.from(document.querySelectorAll('.nav__items-down'))
const navItemsDown = document.querySelectorAll('.nav__item-down')
const navItemsMobileMain = Array.from(document.querySelectorAll('.mobile-down'))
const ulItemsMobileDown = Array.from(document.querySelectorAll('.nav__mobile-items-down'))
const allNavItemsMain = Array.from(document.querySelectorAll('.nav__item-main'))
const navBurger = document.querySelector('.nav__burger')
const navMobileItems = document.querySelector('.nav__mobile-items')
const specialityImg = document.querySelector('.speciality-photo')
const specialityEnlarge = document.querySelector('.fa-magnifying-glass-plus')
const specialityClose = document.querySelector('.speciality-closing-info')
const coursesTitle = document.querySelectorAll('.courses__title')
const coursesContent = document.querySelectorAll('.courses__content')
const inputValues = document.querySelectorAll('.courses__calculator-grade')
const calculateButton = document.querySelector('.courses__calculator-button')
const gradeResult = document.querySelector('.courses__result')
const gradeResultInfo = document.querySelector('.courses__calculator-result')
const gradeCloseResult = document.querySelector('.courses__close-result')
const coursesExplanation = document.querySelector('.courses__explanation')

let currentTheme
const inputNumbersArr = []

const changeTheme = () => {
	if (body.getAttribute('data-mode') === 'dark') {
		localStorage.setItem('theme', 'light')
	} else {
		localStorage.setItem('theme', 'dark')
	}
	saveTheme()
}

const saveTheme = () => {
	currentTheme = localStorage.getItem('theme')
	
	if (currentTheme !== null)
	{
		body.setAttribute('data-mode', currentTheme)
	}
	else
	{
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
	const navItems = document.querySelector('.nav__items')

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
	const allMobileItemsMain = Array.from(
		document.querySelectorAll('.nav__mobile-main')
	)

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

if (
	specialityEnlarge !== null && specialityClose !== null && specialityImg !== null
) {
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

	specialityEnlarge.addEventListener('click', enlargeImg)
	specialityImg.addEventListener('click', closeImg)
	specialityClose.addEventListener('click', closeImg)
}

for (let i = 0; i < coursesTitle.length; i++) {
	const showCoursesContent = () =>
		coursesContent[i].classList.toggle('courses-visible')

	coursesTitle[i].addEventListener('click', showCoursesContent)
}

if (
	inputValues !== [] &&
	gradeResult !== null & coursesExplanation !== null && gradeResultInfo !== null && gradeCloseResult !== null
) {
	const calculateGrade = (e) => {
		inputValues.forEach((inputValue) => {
			const inputNumber = parseFloat(inputValue.value)
			inputNumbersArr.push(inputNumber)
		})

		const exerciseGrades = inputNumbersArr.slice(0, -4)
		const testGrades = inputNumbersArr.slice(-4)
		const sumExerciseGrades = exerciseGrades.reduce((prevGrade, nextGrade) => {
			return prevGrade + nextGrade
		})
		const sumTestGrades = testGrades.reduce((prevGrade, nextGrade) => {
			return prevGrade + nextGrade
		})
		const flunkingGradesCount = exerciseGrades.filter(
			(grade) => grade === 2
		).length
		const testAverage = sumTestGrades / testGrades.length

		if (flunkingGradesCount <= 1 && testAverage >= 3) {
			const gradeResultNumber = Math.round((((2 / 3) * sumExerciseGrades) / 3 + ((1 / 3) * sumTestGrades) / 4) * 2) / 2
			gradeResult.textContent = gradeResultNumber.toFixed(1)
			coursesExplanation.style.display = 'none'
		} else {
			gradeResult.textContent = '2.0'
			coursesExplanation.style.display = 'block'
		}

		inputNumbersArr.length = 0

		e.preventDefault()
		if (gradeResultInfo.classList.contains('result-visible')) {
			gradeResult.textContent = gradeResultNumber.toFixed(1)
		} else {
			gradeResultInfo.classList.add('result-visible')
		}
	}

	const closeResult = (e) => {
		e.preventDefault()
		gradeResultInfo.classList.remove('result-visible')
	}

	calculateButton.addEventListener('click', calculateGrade)
	gradeCloseResult.addEventListener('click', closeResult)
}

const displayYear = () => {
	const year = document.querySelector('.year')

	const getYear = new Date()
	year.textContent = getYear.getFullYear()
}

themeLink.addEventListener('click', changeTheme)
window.addEventListener('DOMContentLoaded', saveTheme)
window.addEventListener('click', removeItemsDown)
navBurger.addEventListener('click', showMobileItems)
navBurger.addEventListener('click', removeMobileItemsDown)
window.addEventListener('DOMContentLoaded', highlightNavMain)
window.addEventListener('DOMContentLoaded', highlightMobileMain)
window.addEventListener('DOMContentLoaded', displayYear)
