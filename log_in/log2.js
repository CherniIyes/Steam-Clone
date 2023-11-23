


$(document).ready(function () {

  function validatePassword(pass) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(pass)
  }

  $('.sign').on('click', function (event) {
    const enteredPassword = $('.password').val()
    if (!validatePassword(enteredPassword)) {
      alert('Password is not correct!')
      event.preventDefault()
    } else {
      alert('Loading')
      window.location.href = "http://127.0.0.1:5500/home_page/index2.html"
      // window.location.replace("http://127.0.0.1:5500/Steam-Clone/home_page/index.html")
      // window.location.assign("http://127.0.0.1:5500/Steam-Clone/home_page/index.html");

      // window.location.href = "Steam-Clone/home_page/index.html";
    }
  });

});


$(document).ready(function () {
  $('.makeacc').on('click', function (event) {
    window.location.href = "http://127.0.0.1:5500/Steam-Clone/create%20account/create_account.html"

  });
});