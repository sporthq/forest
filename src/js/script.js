const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navItems = document.querySelectorAll('.nav-mobile--item');
const navLogo = document.querySelector('.nav-mobile__logo--icon');
const shadow = document.querySelector('.header__shadow');
const currentYear = document.querySelector('.footer__year');

const getCurYear = function () {
	const data = new Date().getFullYear()
	
	currentYear.textContent = data
};

const showMobile = function () {
	burgerBtn.classList.contains('is-active')
		? (navMobile.style.transform = 'translateX(0%)')
		: (navMobile.style.transform = 'translateX(102%)');
};

const showMobileItems = function () {
	navItems.forEach((item) => {
		burgerBtn.classList.contains('is-active')
			? (item.style.transform = 'translateX(0%)')
			: (item.style.transform = 'translateX(200%)');
	});
};

const toggleShadowMobile = function () {
	burgerBtn.classList.contains('is-active')
		? (shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.75)')
		: (shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.35)');
};

const showMobileNav = () => {
	burgerBtn.classList.toggle('is-active');

	showMobile();

	showMobileItems();

	toggleShadowMobile();
};

burgerBtn.addEventListener('click', showMobileNav);

window.addEventListener('scroll', function () {
	if (window.scrollY > 120) {
		burgerBtn.classList.remove('is-active');
		navMobile.style.transform = 'translateX(102%)';
		shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
	}
});

getCurYear();

