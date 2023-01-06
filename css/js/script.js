const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navItems = document.querySelectorAll('.nav-mobile--item');
const navLogo = document.querySelector('.nav-mobile__logo--icon');
const shadow = document.querySelector('.header__shadow');
const showMobileNav = () => {
	burgerBtn.classList.toggle('is-active');

	burgerBtn.classList.contains('is-active')
		? (navMobile.style.transform = 'translateX(0%)')
		: (navMobile.style.transform = 'translateX(102%)');

	navItems.forEach((item) => {
		burgerBtn.classList.contains('is-active')
			? (item.style.transform = 'translateX(0%)')
			: (item.style.transform = 'translateX(200%)');
	});

	burgerBtn.classList.contains('is-active')
		? (navLogo.style.opacity = 1)
		: (navLogo.style.opacity = 0),
		(navLogo.style.transitionDelay = 0 + 's');
	burgerBtn.classList.contains('is-active')
		? (navLogo.style.transitionDelay = 0.3 + 's')
		: (navLogo.style.transitionDelay = 0 + 's');
	burgerBtn.classList.contains('is-active')
		? (shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.75)')
		: (shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.35)')


};

burgerBtn.addEventListener('click', showMobileNav);
