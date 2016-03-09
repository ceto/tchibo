console.log('\'Allo \'Allo!');
$(document).foundation();

$(document).ready(function(){

  $('.headmain__videowrap').fitVids();

  $('.movietile__thumb').click(function(e) {
    e.preventDefault();
    $('.headmain__videowrap iframe').attr('src', $(this).attr('href'));
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
      if( qId != 10 ) {
        //$(self).parents('.question__block').css('opacity','0');
        setTimeout(function(){
          $('.question__block[data-qid="'+(qId+1)+'"]').addClass('active');
          $('.stations a[data-qid="'+ (qId+1) +'"]').addClass('active');
          $(self).parents('.question__block').removeClass('active');
          $('.stations a[data-qid="'+ (qId) +'"]').removeClass('active');

        },400);

      } else {
        alert('Vége. itt van az ajax POST');
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
      })}, 200);

  });






});
