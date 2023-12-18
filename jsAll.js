function zvonok() {
    telNumberStr=prompt('Введите свой номер телефона');
    alert('Заявка принята!'+'\nПри корректно указанном номере телефона, наш менеджер свяжется с Вами в течение 30 минут.')
}

jQuery(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navContainer: ".navigation",
        autoplay: false,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav: false,
                autoplay: true,
                autoplayTimeout: 3000,
            },
            900:{
                loop: true,
                items:3,
                nav: false,
                autoplay: true,
                autoplayTimeout: 3000,
            },
            1220:{
                items:5,
            }
        }
    });
});

