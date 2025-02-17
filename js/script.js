// Togle class active
const navbarNav = document.querySelector('.navbar-nav');
// hamburger menu di klik
document.querySelector('#humbergermenu').onclick = ( ) => {
	navbarNav.classList.toggle('active');
};

// klick diluar sidebar
const hamberger = document.querySelector('#humbergermenu');

document.addEventlListener('click' , function (e) {
	if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}

});
