$(document).ready(function(){
    const servicePensionFigWrapper = $('.service-pension-fig-wrapper');
    servicePensionFigWrapper.on('click', function(){
      const servicePensionFigExtended = servicePensionFigWrapper.find('.service-pension-fig-extended');
      servicePensionFigExtended.toggleClass('show');
    });
  
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    })
});