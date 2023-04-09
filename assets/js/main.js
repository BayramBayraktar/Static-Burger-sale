/* Pwa-js */
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log("sw registration")
        console.log(registration)
    }).catch((err) => {
        console.log(err)
    })
}



/* content-js  */

$('.slider-for').slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
});


$('.hamburger-menu').click(() => {
    $('.navigations').slideToggle('active')
})