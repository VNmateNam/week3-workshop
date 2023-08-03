$(document).ready(() => {
  $('#login-form').submit((event) => {
    event.preventDefault();

    const email = $('#email-input').val();
    const password = $('#password-input').val();

    $.post('/login', { email, password }, (response) => {
      if (response.valid) {
        // If login is valid, redirect to the account page
        window.location.href = '/account';
      } else {
        // If login is invalid, display error message
        $('#errormsg').removeClass('hidemessage').addClass('showmessage');
      }
    });
  });
});
