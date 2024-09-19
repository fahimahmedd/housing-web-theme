$(function () {

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    speed: 1200,
    cssEase: 'linear',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  // Gallery
  var swiper = new Swiper(".mySwiperGallery", {
    slidesPerView: "auto",
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //   240: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 2,
    //     spaceBetween: 50,
    //   },
    // },
  });


  // Back to Top 
  var btn = $('.backtotop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
       $('.header').addClass('header_sticky');
    } else {
       $('.header').removeClass('header_sticky');
    }
  });
});

// Aos Animation
AOS.init();


// lighBox 
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

// VenuBox
new VenoBox({
  selector: '.my-video-links',
});

// Loader 
$(window).on("load", function(){
  $('#loading-screen').fadeOut(500);    
});



// Massanger Chat Plugin 
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "151041471414936");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function () {
  FB.init({
      xfbml: true,
      version: 'v18.0'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));