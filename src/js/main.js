$(document).ready(function(){
  var brif = $('.reviews');
  var brifTop = brif.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop >= brifTop) {
      console.log('докрутили');
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A77b7da777b7b914974b60677f22834c6abc6dc155c3e364c5b83576b324c1bbd&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false"></script><div class="request"><h2 class="request__header">оставьте <span class="main-color">заявку</span></h2><form action="mail.php" method="POST" id="brif-form"><div class="brif-form"><input type="text" name="user_name" class="brif-input" placeholder="Введите ваше имя"></div><div class="brif-form"><input type="tel" name="user_phone" class="brif-input" placeholder="Введите Ваш номер телефона"></div><button class="button request__button" >заказать  звонок</button></form></div>');
      $(window).unbind('scroll');
    }
  });
});