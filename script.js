$(document).ready(function(){

  $('.spinner-border').hide();
  $('#jquery-logo').attr('width', '200px');
  $('#demo').addClass('text-center');

  $('.nav-item').addClass('p-0 px-1 py-sm-1')

  let jQueryDocLink = 'https://api.jquery.com/';

  showHomeCard();

  $('.nav-item').click(function(){
    showCard($(this));
  })

  let cardsInstructions = {
    '.click': 'Haz click en los botones.',
    '.hide': 'Oculta los botones.',
    '.show': 'Muestra los botones ocultos.',
    '.toggle': 'Haz aparecer y desaparecer cada textos.',
    '.slideDown': 'Expande cada texto.',
    '.slideUp': 'Contrae cada texto.',
    '.slideToggle': 'Expande y contrae cada texto.',
    '.fadeIn': 'Haz aparecer gradualmente cada texto.',
    '.fadeOut': 'Haz desaparecer gradualmente cada texto.',
    '.addClass': 'Agrega clases al bloque.',
    '.before': 'Haz clic en un botón para agregar un símbolo antes de cada elemento de la misma clase.',
    '.after': 'Haz clic en un botón para agregar un símbolo después de cada elemento de la misma clase.',
    '.append': 'Haz clic en un botón para anexar un símbolo dentro de cada elemento de la misma clase.',
    //'.html': '',
    //'.attr': '',
    '.val': 'Selecciona o escribe valores y únelos en el cuadro de más abajo.',
    '.text': 'Presiona cualquier botón para obtener el texto que estos contienen y anexarlo al espacio de más abajo.'
  };


  function showHomeCard() {
    $('.card-header').text('Escoge una función');
    $('.card-body').addClass('text-center');
    $('.card-footer a').text('Ir a la documentación oficial de jQuery');
    $('#jquery-logo').removeClass('d-none');
  }

  function showCard(item) {
    $('#demo').html('');
    $('.nav-item').removeClass('btn-primary');
    item.addClass('btn-primary');
    txt = item.text();
    $('.card-header').text(txt);
    $('#jquery-logo').addClass('d-none');
    $('.card-body').removeClass('text-center');
    $('#description').text(cardsInstructions[txt]);
    useJQueryFunction(txt);
    $('.card-footer a').text('Ver documentación oficial de ' + txt);
    $('.card-footer a').attr('href', jQueryDocLink + txt.slice(1) + '/');
  }


  function useJQueryFunction(itemName) {

    $('#demo').html('');

    if (itemName == '.click') {
      let buttonClickMe = "<button class='click-button'>Cliquéame</button>";
      for (let i = 1; i <= 6; i++) {
        $('#demo').append(buttonClickMe);
      }
      $('.click-button').addClass('btn btn-secondary col-6 col-md-4 col-lg-2');
      $('.click-button').click(function(){
        $(this).text('¡Cliqueado!');
      })
    };

    if (itemName == '.hide') {
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button class='click-button'>Botón " + i + "</button>";
        $('#demo').append(buttonClickMe);
      }
      $('.click-button').addClass('btn btn-danger col-6 col-md-4 col-lg-2');
      $('.click-button').click(function(){
        $(this).hide();
      })
    };

    if (itemName == '.show') {
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button class='click-button'>Mostrar " + i + "</button>";
        $('#demo').append(buttonClickMe);
      }
      for (let i = 1; i <= 6; i++) {
        let hiddenButton = "<button id='hidden-button-" + i + "' class='hidden-button'>Botón " + i + "</button>"
        $('#demo').append(hiddenButton);
      }
      $('.hidden-button').hide();
      $('.hidden-button').addClass('btn btn-success col-6 col-md-4 col-lg-2');
      $('.click-button').addClass('btn btn-secondary col-6 col-md-4 col-lg-2');
      $('.click-button').click(function(){
        let buttonToShow = "#hidden-button-" + $(this).text().slice(8);
        $(buttonToShow).show();
      })
    };

    if (itemName == '.toggle') {
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button class='click-button'>Texto " + i + "</button>";
        $('#demo').append(buttonClickMe);
      }
      $('#demo').append("<div id='texts'></div>");
      for (let i = 1; i <= 6; i++) {
        let toggleText = "<p id='text-" + i + "' class='toggle-text'>" + "< ".repeat(i) + "Este es el texto " + i + " >".repeat(i) + "</p>";
        $('#texts').append(toggleText);
        $('#texts').addClass('mt-3');
      }
      $('#text-1, #text-2, #text-3').hide();
      $('.click-button').addClass('btn btn-warning col-6 col-md-4 col-lg-2');
      $('.click-button').click(function(){
        let textToToggle = "#text-" + $(this).text().slice(6);
        $(textToToggle).toggle();
      })
    };

    if (itemName == '.slideDown') {
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button class='click-button'>Texto " + i + "</button>";
        $('#demo').append(buttonClickMe);
      }
      $('#demo').append("<div id='texts'></div>");
      for (let i = 1; i <= 6; i++) {
        let slideText = "<p id='slide-down-" + i + "' class='slide-text'>" + "< ".repeat(i) + "Este es el texto " + i + " >".repeat(i) + "<br>";
        slideText += i*200 + ' milésimas de segundo en aparecer</p>';
        $('#texts').append(slideText);
        $('#texts').addClass('mt-3');
      }
      $('.slide-text').hide()
      $('.click-button').addClass('btn btn-success col-6 col-md-4 col-lg-2');
      $('.click-button').click(function(){
        let num = $(this).text().slice(6);
        let slideText = "#slide-down-" + num;
        $(slideText).slideDown(num*200);
      })
    };

    if (itemName == '.slideUp') {
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button class='click-button'>Texto " + i + "</button>";
        $('#demo').append(buttonClickMe);
      }
      $('#demo').append("<div id='texts'></div>");
      for (let i = 1; i <= 6; i++) {
        let slideText = "<p id='slide-up-" + i + "' class='slide-text'>" + "< ".repeat(i) + "Este es el texto " + i + " >".repeat(i) + "<br>";
        slideText += i*200 + ' milésimas de segundo en desaparecer</p>';
        $('#texts').append(slideText);
        $('#texts').addClass('mt-3');
      }
      $('.click-button').addClass('btn btn-danger col-6 col-md-4 col-lg-2');
      $('.click-button').click(function(){
        let num = $(this).text().slice(6);
        let slideText = "#slide-up-" + num;
        $(slideText).slideUp(num*200);
      })
    };

    if (itemName == '.slideToggle') {
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button class='click-button'>Texto " + i + "</button>";
        $('#demo').append(buttonClickMe);
      }
      $('#demo').append("<div id='texts'></div>");
      for (let i = 1; i <= 6; i++) {
        let slideText = "<p id='slide-toggle-" + i + "' class='slide-text'>" + "< ".repeat(i) + "Este es el texto " + i + " >".repeat(i) + "<br>";
        slideText += i*200 + ' milésimas de segundo</p>';
        $('#texts').append(slideText);
        $('#texts').addClass('mt-3');
      }
      $('#slide-toggle-1, #slide-toggle-2, #slide-toggle-3').hide();
      $('.click-button').addClass('btn btn-warning col-6 col-md-4 col-lg-2');
      $('.click-button').click(function(){
        let num = $(this).text().slice(6);
        let slideText = "#slide-toggle-" + num;
        $(slideText).slideToggle(num*200);
      })
    };

    if (itemName == '.fadeIn') {
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button class='click-button'>Texto " + i + "</button>";
        $('#demo').append(buttonClickMe);
      }
      $('#demo').append("<div id='texts'></div>");
      for (let i = 1; i <= 6; i++) {
        let fadeText = "<p id='fade-in-" + i + "' class='fade-in'>" + "< ".repeat(i) + "Este es el texto " + i + " >".repeat(i) + "<br>";
        fadeText += i*200 + ' milésimas de segundo</p>';
        $('#texts').append(fadeText);
        $('#texts').addClass('mt-3');
      }
      $('.click-button').addClass('btn btn-success col-6 col-md-4 col-lg-2');
      $('.fade-in').hide();
      $('.click-button').click(function(){
        let num = $(this).text().slice(6);
        let fadeText = "#fade-in-" + num;
        $(fadeText).fadeIn(num*200);
      })
    };

    if (itemName == '.fadeOut') {
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button class='click-button'>Texto " + i + "</button>";
        $('#demo').append(buttonClickMe);
      }
      $('#demo').append("<div id='texts'></div>");
      for (let i = 1; i <= 6; i++) {
        let fadeText = "<p id='fade-out-" + i + "' class='fade-out'>" + "< ".repeat(i) + "Este es el texto " + i + " >".repeat(i) + "<br>";
        fadeText += i*200 + ' milésimas de segundo</p>';
        $('#texts').append(fadeText);
        $('#texts').addClass('mt-3');
      }
      $('.click-button').addClass('btn btn-danger col-6 col-md-4 col-lg-2');
      $('.click-button').click(function(){
        let num = $(this).text().slice(6);
        let fadeText = "#fade-out-" + num;
        $(fadeText).fadeOut(num*200);
      })
    };

    if (itemName == '.addClass') {
      let classes = ['font-weight-bold', 'text-danger', 'bg-warning', 'text-uppercase', 'border border-primary', 'shadow-lg rounded'];
      let classesNames = ['Texto en negrita', 'Texto rojo', 'Fondo amarillo', 'Mayúsculas', 'Borde azul', 'Sombreado'];
      for (let i = 1; i <= 6; i++) {
        let buttonClickMe = "<button id='btn-class-" + i + "' class='click-button'>" + classesNames[i-1] + "</button>";
        $('#demo').append(buttonClickMe);
        $('#btn-class-' + i).addClass(classes[i-1]);
      }
      $('.click-button').addClass('btn btn-light col-6 col-md-4 col-lg-2');
      $('#demo').append('<p id="button-added-class">La clase se aplica a este bloque</p>');
      $('#button-added-class').addClass('mt-3 p-2 d-inline-block');
      $('.click-button').click(function(){
        let num = $(this).attr('id').slice(10);
        let classToApply = classes[num-1];
        $('#button-added-class').addClass(classToApply);
      })

    };

    if (itemName == '.before') {
      for (let i = 1; i <= 3; i++) {
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-success">Verde ' + i + '</button>');
        $('#demo').append('</div>');
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-danger">Rojo ' + i + '</button>');
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-warning">Amarillo ' + i + '</button>');
        $('#demo').append('</div>');
      }
      $('.click-button').addClass('col-4 btn');
      $('.click-button').click(function(){
        $('.' + $(this).attr('class').slice(13,24)).before('<');
      })
    };

    if (itemName == '.after') {
      for (let i = 1; i <= 3; i++) {
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-success">Verde ' + i + '</button>');
        $('#demo').append('</div>');
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-danger">Rojo ' + i + '</button>');
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-warning">Amarillo ' + i + '</button>');
        $('#demo').append('</div>');
      }
      $('.click-button').addClass('col-4 btn');
      $('.click-button').click(function(){
        $('.' + $(this).attr('class').slice(13,24)).after('>');
      })
    };

    if (itemName == '.append') {
      for (let i = 1; i <= 3; i++) {
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-success">Verde ' + i + '</button>');
        $('#demo').append('</div>');
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-danger">Rojo ' + i + '</button>');
        $('#demo').append('<div class="row">');
        $('#demo').append('<button class="click-button btn-warning">Amarillo ' + i + '</button>');
        $('#demo').append('</div>');
      }
      $('.click-button').addClass('col-6 btn');
      $('.click-button').click(function(){
        $('.' + $(this).attr('class').slice(13,24)).append('*');
      })
    };

    //if (itemName == '.html') {
    //};

    //if (itemName == '.attr') {
    //};

    if (itemName == '.val') {
      textosInput = [['Gato','Perro','Elefante'], ['Pequeño','Mediano','Grande'], ['Rojo','Café','Gris']];
      for (let i = 0; i < 3; i++) {
        $('#demo').append('<div id="row-' + i + '" class="row"></div>');
        for (let j = 0; j < 3; j++) {
          let buttonClickMe = "<button id='button-click-" + i + j + "' class='click-button'>" + textosInput[i][j] + "</button>";
          $('#row-' + i).append(buttonClickMe);
        }
        $('#demo').append('<input id="input-text-' + i + '" class="input-text" value="" type="text">');
      }
      $('.click-button').addClass('btn btn-light col-4 border-secondary');
      $('.input-text').addClass('col-4 text-center mb-4 mt-2');
      $('#demo').append('<button id="use-val">Unir valores</button>');
      $('#use-val').addClass('d-block btn btn-success offset-4 col-4 mt-2');
      $('#demo').append('<p id="values-together"></p>');
      $('#values-together').addClass('border border-prinary p-4 mt-4');
      $('.click-button').click(function(){
        num = $(this).attr('id').slice(13,14);
        $('#input-text-' + num).val($(this).text());
      })
      $('#use-val').click(function(){
        let val0 = $('#input-text-0').val();
        let val1 = $('#input-text-1').val();
        let val2 = $('#input-text-2').val();
        $('#values-together').text(val0+val1+val2);
      })
    };

    if (itemName == '.text') {
      let topKeyboardRow = ['q','w','e','r','t','y','u','i','o','p'];
      let middleKeyboardRow = ['a','s','d','f','g','h','j','k','l'];
      let bottomKeyboardRow = ['z','x','c','v','b','n','m',',','.'];
      $('#demo').append('<div class="top-row row"></div>');
      for (key of topKeyboardRow){
        $('.top-row').append('<button class="btn btn-dark key col py-lg-3">' + key + '</button>');
      }
      $('#demo').append('<div class="middle-row row ml-1 mr-3 ml-lg-1 mr-lg-5"></div>');
      for (key of middleKeyboardRow){
        $('.middle-row').append('<button class="btn btn-dark key col py-lg-3">' + key + '</button>');
      }
      $('#demo').append('<div class="bottom-row row ml-3 mr-2 ml-lg-5 mr-lg-1"></div>');
      for (key of bottomKeyboardRow){
        $('.bottom-row').append('<button class="btn btn-dark key col py-lg-3">' + key + '</button>');
      }
      $('#demo').append('<div class="space-row row"></div>');
      $('.space-row').append('<button class="btn btn-dark key offset-3 col-7 py-3 py-lg-4"> </button>');
      $('.key').addClass('border-light')
      $('#demo').append('<p id="lettersWritten" class="mt-3"></p>');
      $('.key').click(function(){
        $('#lettersWritten').append($(this).text());
      })
    };

  }


});
