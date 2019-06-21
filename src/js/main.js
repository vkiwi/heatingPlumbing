var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');



button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});

function autoClose(){
  modal.classList.remove('modal_active');
}

// setInterval(autoClose, 5000);

$(document).ready(function(){
  /**
   * При прокрутке страницы, показываем или срываем кнопку
   */
  $(window).scroll(function () {
      // Если отступ сверху больше 50px то показываем кнопку "Наверх"
      if ($(this).scrollTop() > 50) {
          $('#button-up').fadeIn();
      } else {
          $('#button-up').fadeOut();
      }
  });
  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('#button-up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  
});

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

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

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});