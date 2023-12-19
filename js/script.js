const up_btn_el = document.querySelector('footer .up');


up_btn_el.addEventListener('click', () => {
    document.querySelector('header').scrollIntoView(true, {
        behavior: 'smooth',
    });
});


