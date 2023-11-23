// $(document).ready(function () {
//   $('.sign').on('click', function (event) {
//     window.location.href = "http://127.0.0.1:5500/home_page/index2.html";

//   });
// });


// $(document).ready(function () {
//   $('.makeacc').on('click', function (event) {
//     window.location.href = "http://127.0.0.1:5500/create%20account/create_account.html";

//   });
// });








$(document).ready(function () {

  function validatePassword(pass) {
    // Add your password criteria here
    // For example, at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(pass);
  }

  $('.sign').on('click', function (event) {
    const enteredPassword = $('.pass').val();
    if (!validatePassword(enteredPassword)) {
      alert('Password does not meet the criteria. Please follow the specified requirements.');
      event.preventDefault();
    } else {
      alert('Password good');
      window.location.href = "http://127.0.0.1:5500/home_page/index2.html";
    }
  });















  // $('.sign').on('click', function (event) {
  //   window.location.href = "http://127.0.0.1:5500/home_page/index2.html";

  // });
});


$(document).ready(function () {
  $('.makeacc').on('click', function (event) {
    window.location.href = "http://127.0.0.1:5500/create%20account/create_account.html";

  });
});