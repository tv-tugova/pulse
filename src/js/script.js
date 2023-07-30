$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }  
            }
        ]
    });
}); 


/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
}); */ /* Tiny-slider */ 

/* document.querySelector('.slick-prev').onclick = function () {  *//* Обращение к первой кнопке из html-документа с классом slick-prev (такое название для того, чтобы не ломать основной метод создания слайдера в проекте). При клике на эту кнопку вызывается функция, которая в данном случае отождествляет нажатие той кнопки с нажатием установленной tiny-слайдером кнопкой*/
/*     slider.goTo('prev'); */
/* };  *//* Tiny-slider */ 

/* document.querySelector('.slick-next').addEventListener('click', function () { 
    slider.goTo('next'); */
/* });  *//* Tiny-slider */ 
 /* Альтернативный способ записи, результат будет такой же, как и в прошлый раз */