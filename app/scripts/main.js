console.log('\'Allo \'Allo!');
$(document).foundation();

$(document).ready(function(){

  $('.menutoggle').click(function(e) {
    e.preventDefault();
    $('.itemstohide').toggleClass('show');
  });
  $('.coke').click(function(e) {
    e.preventDefault();
    $('.cookieblock').remove();
  });

  $('.lillaopen').click(function(e) {
    e.preventDefault();
    $('.lilla').addClass('show');
  });
  $('.lillaclose').click(function(e) {
    e.preventDefault();
    $('.lilla').removeClass('show');
  });

  $('.videos__more').click(function(e) {
    e.preventDefault();
    $('.videos').toggleClass('showallvideo');
    $('.pagehead').foundation('scrollToLoc', '#videos');
  });



  $('.headmain__videowrap').fitVids();

  $('.movietile__thumb').click(function(e) {
    e.preventDefault();
    $('.headmain__videowrap iframe').attr('src', $(this).attr('href'));
    $('.headmain__movie__title').text($(this).parents('.movietile').find('.movietile__title').text());
    $('.headmain__movie__lead').text($(this).parents('.movietile').find('.movietile__lead').text());
    $('.headmain__movie__share a').attr('href', $(this).parents('.movietile').find('.movietile__share a').attr('href'));
    // A fővideó mellet lévő temékek cseréje itt kezdeményezhető
    //URL frissítés kidolgozandó
    history.pushState(null, null, $(this).data('slug'));
    $('.pagehead').foundation('scrollToLoc', '#headmain');
  });


  function quizstarter() {
    $('#thequiz__start').on('click', function(e) {
      e.preventDefault();
      $('#thequiz').removeClass('jollathato');
      setTimeout(function(){
        $( '#thequiz' ).load( $('#thequiz__start').attr('href') + ' #quiz', function() {
          $('#thequiz').addClass('jollathato');
          $('.pagehead').foundation('scrollToLoc', '#thequiz');
          klikkelo();
          ///opcionális
          //history.pushState(null, null, 'kviz');
        })}, 200);
    });
  };

  function klikkelo() {
    $('.stations a').on('click', function(e) {e.preventDefault();});
    $('.question__block[data-qid="1"]').addClass('active');
    $('.stations a[data-qid="1"]').addClass('active');

    $('.answer input[type="radio"]').on('change', function() {
      var qId = $(this).parents('.question__block').data('qid');
      var qValue = $(this).attr('value');
      var self = this;
      if( qId != 10 ) {
        //$(self).parents('.question__block').css('opacity','0');
        setTimeout(function(){
          $('.question__block[data-qid="'+(qId+1)+'"]').addClass('active');
          $('.stations a[data-qid="'+ (qId+1) +'"]').addClass('active');
          $(self).parents('.question__block').removeClass('active');
          $('.stations a[data-qid="'+ (qId) +'"]').removeClass('active');

        },400);

      } else {
        $(self).parents('.question__block').removeClass('active');
        $('.stations a[data-qid="'+ (qId) +'"]').removeClass('active');
        $( '#thequiz' ).load( 'quizstarter.html');
        //alert('Ide kell egy ajax POST.');
        //AJAX POST eredménye alapján az alapján a stuszállítás kicsit késleltetve
        setTimeout(function(){
          $('.result').removeClass('winner');
          $('#result__korte').addClass('winner');
          $('.pagehead').foundation('scrollToLoc', '#result__korte');
          quizstarter();
        }, 400);

      }
    });
  };
  quizstarter();

});
