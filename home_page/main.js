document.getElementById('next').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft -= widthItem;
}



$(document).ready(function () {
  $('#go').on('click', function () {
    window.location.href = "http://127.0.0.1:5500/home_page/index2.html"

  })})






// $("#go").click(function() {
//   $( this ).location.href= 'http://www.google.com';
// });
