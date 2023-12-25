const up_btn__el = document.querySelector("footer .up");

const location__elements = document.querySelectorAll("header .location");

const search__btn = document.querySelector(".header__menu .search button");
const search__container = document.querySelector(".header__menu .right_group");

const cart__icon = document.querySelector(".header__menu #cart");
const cart_mini__panel = document.querySelector(
	".header__menu #cart .cart_mini"
);

cart__icon.addEventListener("click", () => {
	cart_mini__panel.classList.toggle("active");
});

search__btn.addEventListener("click", () => {
	search__container.classList.toggle("right_group_search");
});

location__elements.forEach((el) => {
	el.addEventListener("click", () => {
		const loc_menu = el.querySelector(".location-menu");
		loc_menu.classList.toggle("active");
	});
});

up_btn__el.addEventListener("click", () => {
	document.querySelector("header").scrollIntoView(true, {
		behavior: "smooth",
	});
});

// SWIPER
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".slider__dots",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".arrow_next",
		prevEl: ".arrow_prev",
	},
});