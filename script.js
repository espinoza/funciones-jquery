$(document).ready(function(){

  $('.nav-item').click(function(){
    $('.nav-item').removeClass('font-weight-bold');
    $(this).addClass('font-weight-bold');
    $('.card').addClass('d-none');
    $('.card:contains(' + $(this).text() + ')').removeClass('d-none');
  })

});
