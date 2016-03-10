console.log('\'Allo \'Allo!');
$(document).foundation();

$(document).ready(function(){

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



  function klikkelo() {
    $('.stations a').on('click', function(e) {e.preventDefault();});
    $('.question__block[data-qid="1"]').addClass('active');
    $('.stations a[data-qid="1"]').addClass('active');

     $('.answer input[type="radio"]').on('change', function() {
      var qId = $(this).parents('.question__block').data('qid');
      var qValue = $(this).attr('value');
      var self = this;
      if( qId != 3 ) {
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
        //alert('Itt van az ajax POST. Most dobok egy eredményt');

        $('#thequiz').removeClass('jollathato');
        setTimeout(function(){
          $('#thequiz').addClass('jollathato');
          $( '#thequiz' ).load( 'alma.html' + ' #result', function() {
            $('.pagehead').foundation('scrollToLoc', '#thequiz');
        })}, 400);

      }
    });

  }

  $('#thequiz__start').click(function(e) {
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






});
