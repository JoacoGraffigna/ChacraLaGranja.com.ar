document.addEventListener('DOMContentLoaded',() => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel,{
    duration: 25,
    dist:-80,
    indicators:true,
    nowRap:false,
    numVisible:1,
    padding:5,
  });
});
