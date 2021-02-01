$(document).ready(function(){

  $('.nav-item').click(function(){
    $('.nav-item').removeClass('btn-primary');
    $(this).addClass('btn-primary');
    $('.card').addClass('d-none');
    $('.card:contains(' + $(this).text() + ')').removeClass('d-none');
  })

  $('.card').addClass('text-left');
  $('.spinner-border').hide();

});
