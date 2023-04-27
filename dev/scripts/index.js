$(document).ready(function () {

  new LazyLoad({
    elements_selector: '.reviews__content',
    unobserve_entered: true,
    callback_enter: function (swiperElement) {
      $('.reviews__slider').css({display: 'block'})
      new Swiper('.reviews__slider', {
        slidesPerView: 1,
        spaceBetween: 35,
        loop: true,
        loopedSlides: 5,
        loopAdditionalSlides: 5,
        initialSlide: 3,
        speed: 800,
        pagination: {
          el: '.reviews__pagination',
          clickable: true,
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          0: {},
          // when window width is >= 480px
          768: {},
          // when window width is >= 480px
          1024: {},
          // when window width is >= 640px
          1200: {
            spaceBetween: 35,
            slidesPerView: 1,
          },
        },
        on: {
          slideChange: function (swiper) {
            curSlide = swiper.activeIndex
            swiper3.slideTo(curSlide)
          },
        },
      })
    },
  })
  var videoBlocks = $('.js-m-cases-item')

  mask('input[type="tel"]');

  // Для каждого блока получаем продолжительность видео и выводим ее
  videoBlocks.each(function () {
    var block = $(this)
    var iframe = block.find('iframe')[0]
    var player = new Vimeo.Player(iframe)

    player.getDuration().then(function (duration) {
      var minutes = Math.ceil(duration / 60)
      block.find('.js-m-cases-duration').text(minutes + 'хв')
    })
  })

  if ($('.js-m-cases-slider')[0]) {
    new Swiper('.js-m-cases-slider', {
      slidesPerView: 3,
      spaceBetween: 50,
      observer: true,
      observeParents: true,
      loop: false,
      speed: 300,
      navigation: {
        nextEl: '.js-m-cases-arrow-next',
        prevEl: '.js-m-cases-arrow-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
        },
      },
    })
  }

  var curSlide
  var swiper3 = new Swiper('.reviews__users', {
    slidesPerView: 1,
    spaceBetween: 35,
    loop: true,
    loopedSlides: 5,
    loopAdditionalSlides: 5,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    initialSlide: 3,
  })

  $('.js-cases-play-btn').on('click', function () {
    $('.js-m-cases-item').find('.js-m-cases-video').removeClass('active')
    $(this)
      .closest('.js-m-cases-item')
      .find('.js-m-cases-video')
      .addClass('active')
    var block = $(this).closest('.js-m-cases-item')
    var iframe = block.find('iframe')[0]
    var player = new Vimeo.Player(iframe)
    $('.js-m-cases-item')
      .not(block)
      .each(function () {
        var iframe2 = $(this).find('iframe')[0]
        var player2 = new Vimeo.Player(iframe2)

        player2.setCurrentTime(0)
        player2.pause()
      })
    player.play()
  })

  $('input').each(function () {
    $(this).change(function () {
      var $value = $(this).val()
      var $target = $(this).attr('data-target')
      if (!$value) {
        $('#' + $target).css('display', 'block')
      } else {
        $('#' + $target).css('display', 'none')
      }
    })
  })

  var windowWidth = $(window).width()
  $('.js-standart-phone-button').click(function () {
    // if (windowWidth >= 992) {
    //   $('.js-tarifs-phone').css({ display: 'none' })
    // } else {
    //   $('.js-tarifs-phone').css({ display: 'block' })
    // }

    $('#tarifs-first-popup').css({ opacity: '1', visibility: 'visible' })
    $('#tarifs__popup-bg').css({ opacity: '1', visibility: 'visible' })
  })

  $('.js-standart-button').click(function () {
    $('.js-tarifs-phone').css({ display: 'block' })

    // var id = $(this).data('id');
    // $('#tariff_id').val(id);

    $('#tarifs-first-popup').css({ opacity: '1', visibility: 'visible' })
    $('#tarifs__popup-bg').css({ opacity: '1', visibility: 'visible' })

    $('.js-error-name').hide()
    $('.js-error-phone').hide()
    $('.js-error-email').hide()
  })

  $('#tarifs__popup-bg').click(function () {
    $('#tarifs-first-popup').css({ opacity: '0', visibility: 'hidden' })
    $('#tarifs__popup-bg').css({ opacity: '0', visibility: 'hidden' })
    $('#tarifs-second-popup').css({ opacity: '0', visibility: 'hidden' })
  })

  $('#popup-close-button').click(function () {
    $('#tarifs-first-popup').css({ opacity: '0', visibility: 'hidden' })
    $('#tarifs__popup-bg').css({ opacity: '0', visibility: 'hidden' })
  })

  $('#popup-close-button2').click(function () {
    $('#tarifs-second-popup').css({ opacity: '0', visibility: 'hidden' })
    $('#tarifs__popup-bg').css({ opacity: '0', visibility: 'hidden' })
  })

  $('.js-book-btn').click(function () {
    $('.js-bookPlace-popup').show()
    $('.js-bookPlace-popup-bg').show()
  })

  $('.js-bookPlace-popup-bg').click(() => {
    $('.js-bookPlace-popup').hide()
    $('.js-bookPlace-popup-bg').hide()
  })
})

$(document).ready(function () {
  $('.js-order-form').on('submit', function (e) {
    e.preventDefault()

    $('.js-error-name').hide()
    $('.js-error-phone').hide()
    $('.js-error-email').hide()

    var form = $(this)
    var reg = form.data('reg')

    var name = form.find('input[name="name"]')
    var phone = form.find('input[name="phone"]')
    var email = form.find('input[name="email"]')

    var error = false
    // Валидация
    if (name.val().length < 2) {
      error = true
      $('.js-error-name').css('display', 'block')
    }
    if (phone.val().length < 10) {
      error = true
      $('.js-error-phone').css('display', 'block')
    }
    if (email.val().length < 7) {
      error = true
      $('.js-error-email').css('display', 'block')
    }

    if (!error) {
      // Post request
      $.post(
        'https://pay.voloshyn.site/1/api/add_client?get_pay_form=1&prefix_pid=1',
        form.serializeArray(),
        function (data) {
          if (data.status == 'error') {
            $.each(data.error, function (i, v) {
              if (i == 'name') {
                $('.js-error-name').css('display', 'block')
              }
              if (i == 'phone') {
                $('.js-error-phone').css('display', 'block')
              }
              if (i == 'email') {
                $('.js-error-email').css('display', 'block')
              }
            })
          }
          if (data.status == 'ok') {
            var link = data.pay_link
            $('.js-modal-form').hide()
            $('.js-after-order-1').show()
            $('.js-after-order-1 .modal__error-descr').html(data.pay_form)
            $('.modal__error-title').hide()
          }
        },
        'json',
      )
    }
  })
})
