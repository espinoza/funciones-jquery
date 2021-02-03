$(document).ready(function(){

  $('.spinner-border').hide();

  $('.card').addClass('text-left');

  jQueryDocLink = 'https://api.jquery.com/';
  jQueryLogoHtmlCode = '<img src="img/jquery-logo.png" width=200px alt="jQuery logo">';

  showHomeCard();

  $('.nav-item').click(function(){
    showCard($(this));
  })

  cardsData = getCardsData();

  function showHomeCard() {
    $('.card-header').text('Escoge una función');
    $('.card-body').addClass('text-center');
    $('.card-body').html(jQueryLogoHtmlCode);
    $('.card-footer a').text('Ir a la documentación oficial de jQuery');
  }

  function showCard(item) {
    $('.nav-item').removeClass('btn-primary');
    item.addClass('btn-primary');
    $('.card-header').text(item.text());
    $('.card-body').text(cardsData[item.text()]['description']);
    $('.card-footer a').text('Ver documentación oficial de ' + item.text());
    $('.card-footer a').attr('href', jQueryDocLink + item.text().slice(1) + '/');
    cardsData['.click']['functionDemo'];
  }

  function getCardsData() {
    let cardsData = {};

    cardsData['.click'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.hide'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.show'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.toggle'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.slideDown'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.slideUp'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.slideToggle'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.fadeIn'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.fadeOut'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.addClass'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.before'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.after'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.append'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.html'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.attr'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.val'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    cardsData['.text'] = {
      'description' : '',
      'htmlDemo' : '',
      'docLink' : ''
    };

    return cardsData;
  }

});
