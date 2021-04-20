@@include('./partials/jquery.min.js')
@@include('./partials/slick.js')
@@include('./partials/jquery.fancybox.min.js')


$(function () {
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    function sliderCollage(){
        let elemCollage = document.querySelectorAll('.collage__img');
        const arrTop = [100,-8,51,-15,5,98,0,88,5,55,-10];
        const arrSize = [80,140,140,100,120,100,120,140,100,120,100];
        const arrMarginLeft = [0,-36,-38,-70,-12,-29,-47,-46,-60,-24,-55]
        let j = 0;
        for(let i = 0; i < elemCollage.length; i++) {
            if(j == 11) j = 0
            elemCollage[i].style.zIndex = randomInteger(1,3);
            elemCollage[i].style.marginTop = arrTop[j]+'px';
            elemCollage[i].style.marginLeft = arrMarginLeft[j]+'px';
            elemCollage[i].style.width = arrSize[j]+'px';
            elemCollage[i].style.height = arrSize[j]+'px';
            j++;
        }
    }

    sliderCollage();

    $(function (){
        $('.js-collage-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        });
    })

})
