/*https://www.cssscript.com/carousel-scroller-glider/　レスポンシブ対応のドキュメント*/
レスポンシブ対応のドキュメント

new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 3,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});

new Glider(document.querySelector('.glider2'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots2',
    arrows: {
        prev: '.glider-prev2',
        next: '.glider-next2'
    }
});





  