@@include('./partials/swiper-bundle.min.js')

$(function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
        initialSlide:0,
        speed: 300,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    swiper.on('slideChange', function (){
        swiper.update();
    })

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    function sliderCollage(){
        let elemCollage = document.querySelectorAll('.collage__img');
        const arrTop = [100,-8,51,-15,5,98,0,88,5,55,-10];
        const arrSize = [80,140,140,100,120,100,120,140,100,120,100];
        const arrMarginLeft = [4,-36,-38,-70,-12,-29,-47,-46,-60,-24,-55]
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
    function sliderCollageStop() {
        let elemCollage = document.querySelectorAll('.collage__img');
        const arrTop = [0,0,0,0,0,0,0,0,0,0,0];
        const arrSize = [215,215,215,215,215,215,215,215,215,215,215];
        const arrMarginLeft = [0,0,0,0,0,0,0,0,0,0,0];
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


    $(window).on('load resize', function() {
        if ($(window).width() >= 1023) {
            sliderCollage()
        } else {
            sliderCollageStop()
        }
    });
})
