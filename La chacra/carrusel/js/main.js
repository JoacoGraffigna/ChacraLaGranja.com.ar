document.addEventListener('DOMContentLoaded',() => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel,{
    duration: 135,
    dist:-80,
    indicators:true,
    nowRap:false,
    numVisible:3,
    padding:5,
  });
});
