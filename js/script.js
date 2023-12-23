const up_btn_el = document.querySelector("footer .up");
const location_elements = document.querySelectorAll("header .location");

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
