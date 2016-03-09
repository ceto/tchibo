console.log('\'Allo \'Allo!');
$(document).foundation();

$(document).ready(function(){

  $('.headmain__videowrap').fitVids();

  $('.movietile__thumb').click(function(e) {
    e.preventDefault();
    $('.headmain__videowrap iframe').attr('src', $(this).attr('href'));
    $('.pagehead').foundation('scrollToLoc', '#headmain');
  });


  $('#thequiz__start').click(function(e) {
    e.preventDefault();
    $('#thequiz').removeClass('jollathato');

    setTimeout(function(){
      $( '#thequiz' ).load( $('#thequiz__start').attr('href') + ' #quiz', function() {
         $('#thequiz').addClass('jollathato');
         $('.pagehead').foundation('scrollToLoc', '#thequiz');
      })}, 200);

  });




});
