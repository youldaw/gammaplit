$(function () {

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });

    $('#searchInput').on('click', function (e) {
        e.preventDefault();
        $('.menu-drop').toggleClass('active');
    });
    $(document).mouseup(function (e) {
        var div = $(".menu-drop");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('active');
        }
    });


    var swiper3 = new Swiper(".article-slide", {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: false,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });


    var swiper4 = new Swiper(".our-works-slide", {
        slidesPerView: 2,
        spaceBetween: 24,
        loop: false,
        clickable: false,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.6,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });


    var swiper5 = new Swiper(".gamma-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    var swiper6 = new Swiper(".review-slider", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        freeMode: true,
        grabCursor: true,
        loop: false,
        speed: 1000,
    });


    var swiper7 = new Swiper(".popular-product-slide", {
        slidesPerView: 2,
        spaceBetween: 24,
        loop: false,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.6,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.4,
            },
        },
    });


});



$(document).ready(function(){
    $('#searchInput').keyup(function(){
        var searchText = $(this).val().toLowerCase();
        var matchedItems = $('.items-list .item').filter(function() {
            return $(this).text().toLowerCase().indexOf(searchText) !== -1;
        });
        if (searchText === '') {
            $('.items-list .item').hide(); // Agar so'rov bo'sh bo'lsa, barcha elementlarni yop
        } else {
            $('.items-list .item').hide(); // Barcha elementlarni yop
            $('.items-list .item').removeClass('highlighted'); // Barcha elementlardan classni olib tashla
            matchedItems.show(); // Mos elementlarni ko'rsat
            matchedItems.addClass('highlighted'); // Mos elementlarga class qo'sh
        }
    });
});


