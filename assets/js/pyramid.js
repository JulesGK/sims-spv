$(document).ready(function(){
    const servicePensionFigWrapper = $('.service-pension-fig-wrapper');
    servicePensionFigWrapper.on('click', function(){
        const servicePensionFigExtended = servicePensionFigWrapper.find('.service-pension-fig-extended');
        servicePensionFigExtended.toggleClass('show');
    });
});