$("document").ready(function(){

    AOS.init();

    window.onscroll = function() {myFunction()};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }

    // window.onkeydown = (e) => console.log(e);
    // window.addEventListener("keydown", (e) => console.log(e));

    $(window).scroll(function() {
      
      if ($(this).scrollTop() > 0) {
        $(".header").addClass("on");
        $(".header .logo img").attr("src", "img/tobes-logo2.png");
        $(".header .gnb").addClass("on");
        $(".top-btn").addClass("on");
      } else {
        $(".header").removeClass("on");
        $(".header .logo img").attr("src", "img/tobes-wlogo2.png");
        $(".header .gnb").removeClass("on");
        $(".top-btn").removeClass("on");
      }

    // var hw = $(".header-wrap").offset().top;
    // $(window).scroll(function() {
    //     var window = $(this).scrollTop();
  
    //   if(hw < window) {
    //     $(".header").addClass("on");
    //     $(".header .logo img").attr("src", "img/tobes-logo.png");
    //     $(".header .gnb").addClass("on");
    //     $(".top-btn").addClass("on");
    //   } else {
    //     $(".header").removeClass("on");
    //     $(".header .logo img").attr("src", "img/tobes-wlogo.png");
    //     $(".header .gnb").removeClass("on");
    //     $(".top-btn").removeClass("on");
    //   }
  })


  $(".top-btn").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  })

  $(".header .gnb").click(function(){
      $(".header .lnb").toggleClass("on")
      // $(".header").toggleClass("on");
      // if (".header .lnb.on") {
      //   $(".header").addClass("on");
      //   $(".header .logo img").attr("src", "img/tobes-logo.png");
      // } else{
      //   $(".header").removeClass("on");
      // }
  })

  $(".content .box01").click(function(){
    $(".content .modal").removeClass("on")
    $(".content .modal01").fadeIn(200).addClass("on")
  })
  $(".content .box02").click(function(){
    $(".content .modal").removeClass("on")
    $(".content .modal02").fadeIn(200).addClass("on")
  })
  $(".content .box03").click(function(){
    $(".content .modal").removeClass("on")
    $(".content .modal03").fadeIn(200).addClass("on")
  })
  $(".content .box04").click(function(){
    $(".content .modal").removeClass("on")
    $(".content .modal04").fadeIn(200).addClass("on")
  })

  $(".content .modal").click(function(){
    $(".content .modal").fadeOut(200).removeClass("on")
  })
  $(".modal .modal-close").click(function(){
    $(".content .modal").fadeOut(200).removeClass("on")
  })

})