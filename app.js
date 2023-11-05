//Search form Section
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => 
{
    searchForm.classList.toggle('active');
}
window.onscroll = () =>
{
    searchForm.classList.remove('active');
}

$(document).ready(function()
{
    //Owl Carousel
    $('.owl-carousel').owlCarousel({
        margin: 5,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{  
                items:2
            },
            1000:{
                items:3
            }
        }   
    });
});

