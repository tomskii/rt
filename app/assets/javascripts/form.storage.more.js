$( document ).ready(function() {
  $('[data-includefile]').each(function(){
    var file = $(this).attr("data-includefile");
    $(this).load("/includes/"+$(this).attr("data-includefile")+".html", unWrapPlaceholder)
  });

  //write to local storage
  $('form').storeForm();
  //play back from local storage
  $('.playback-container').getForm();

  //clear storage
  $('.clearStorage').click(function(){
    localStorage.clear();
  });
  //uncheck inputs
  $('input[type=checkbox]').removeAttr('checked');
  $('input[type=radio]').removeAttr('checked');

  (function($){
    $(function(){
      $('#country-selector').val('');
      $("#countries").submit(function( event ) {
        var selectValue = $('#country-selector').val();
        if (_.includes(['Hong Kong', 'Japan', 'Malaysia', 'Singapore',
              'Korea, Republic of', 'Taiwan', 'Brunei Darussalam', 'Israel', 'Canada', 'United States', 'Argentina',
              'Belize', 'Brazil', 'Chile', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico',
              'Nicaragua', 'Panama', 'Paraguay', 'Uruguay', 'Australia', 'New Zealand'], selectValue)){
          window.location.href = 'why-are-you-coming.html';
          event.preventDefault();
        } else if (_.includes([''], selectValue)){
          $(".countryHint").show();
          event.preventDefault();
        } else {
          window.location.href = 'ineligible.html';
          event.preventDefault();
        }
      });
      $('select').selectToAutocomplete();
    });
  })(jQuery);
});
