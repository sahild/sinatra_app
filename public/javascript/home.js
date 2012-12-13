$(document).ready(function(){ 
$(".td_view_bullet_table").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
});