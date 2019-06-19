$(document).ready(function(){
  var brif = $('.reviews');
  var brifTop = brif.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop >= brifTop) {
      console.log('докрутили');
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A77b7da777b7b914974b60677f22834c6abc6dc155c3e364c5b83576b324c1bbd&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  });
});