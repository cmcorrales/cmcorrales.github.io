$(document).ready(function(){
  $('.pagedown').click(function() {
      return $(document).height() - this.scrollTop() - this.height();
  });
  $('.pageup').click(function() {
      $('html, body').animate({ scrollTop: 0 });
  });
})
