// Togle class active
const navbarNav = document.querySelector('.navbar-nav');
// hamburger menu di klik
document.querySelector('#hamburgermenu').onclick = ( ) => {
	navbarNav.classList.toggle('active');
};

// klick diluar sidebar
const hamburger = document.querySelector('#hamburgermenu');

document.addEventlListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}

});
