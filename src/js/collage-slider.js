@@include('./partials/jquery.min.js')
@@include('./partials/slick.js')
@@include('./partials/jquery.fancybox.min.js')


$(function () {
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    var content = document.getElementsByClassName('collage__img');
    var leftStart = 0;
    var topStart = 0;
    var arrTop = [100,0,55,-10,10,105,0,95,10,60,-10]

    for(var i = 0; i < content.length; i++)
    {
        var elemWidth = content[i].offsetWidth;

        var elemLeft = elemWidth;
        content[i].style.zIndex = randomInteger(1,3);

        content[i].style.top = arrTop[i]+'px';

    }

    $(function (){
        $('.responsive').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    })

})
