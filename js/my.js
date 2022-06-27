$(function(){
  // 위로 버튼 클릭시 맨위로
  $(".btn_fixed_bottom").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  // 위로 버튼 안보이다 스크롤 1000 이상시 보이는
  $(".btn_fixed_bottom").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      $(".btn_fixed_bottom").fadeIn();
    } else {
      $(".btn_fixed_bottom").fadeOut();
    }

  //스크롤할때 헤더 배경 추가
    if ($(window).scrollTop() > 1000) {
      $("#hd").addClass("bg");
    } else {
      $("#hd").removeClass("bg");
    }
  });

  //헤더 네브의 링크 클릭시 해당영역으로 스크롤
  $("#hd nav a").click(function () {
    var link = $(this).attr("href");
    var posTop = $(link).offset().top;
    $("html,body").animate({ scrollTop: posTop }, 500);
  });
});
