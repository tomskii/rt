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
});
