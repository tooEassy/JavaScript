$(document).ready(function () {
  // Login
  function closeForgotPopup() {
    $('.js-popup-bg').hide()
    $('.js-popup-forgot').hide()
  }

  function openForgotPopup() {
    $('.js-popup-bg').show()
    $('.js-popup-forgot').show()
  }

  $('.js-login-forgot').click(() => {
    openForgotPopup()
  })

  $('.js-popup-bg').click(() => {
    closeForgotPopup()
  })

  $('.js-login-popup-close').click(() => {
    closeForgotPopup()
  })

  // Form
  var form = $('.js-login-form')
  form.submit((e) => {
    console.log(e)
  })

  var phone = form.find('input[name="phone"]')
  var email = form.find('input[name="email"]')
  var loginButton = $('.js-log-btn')

  phone.on('input', (e) => {
    if (!e.target.value || !email.val()) {
      loginButton.attr('disabled', true)
    } else {
      loginButton.attr('disabled', false)
    }
  })

  email.on('input', (e) => {
    if (!e.target.value || !phone.val()) {
      loginButton.attr('disabled', true)
    } else {
      loginButton.attr('disabled', false)
    }
  })
})
