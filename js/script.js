const up_btn_el = document.querySelector("footer .up");

const location_elements = document.querySelectorAll("header .location");

const search_btn = document.querySelector('.header__menu .search button');
const search_container = document.querySelector(".header__menu .right_group");

search_btn.addEventListener('click', () => {
    search_container.classList.toggle("right_group_search");
})

location_elements.forEach((el) => {
	el.addEventListener("click", () => {
        const loc_menu = el.querySelector(".location-menu");
		loc_menu.classList.toggle("active");
	});
});

up_btn_el.addEventListener("click", () => {
	document.querySelector("header").scrollIntoView(true, {
		behavior: "smooth",
	});
});
