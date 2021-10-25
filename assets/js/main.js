"use strict";

$(window).on ("load", function(){
    // init Isotope
var $grid = $('.price-item-all').isotope({
    // options
    itemSelector: '.col-lg-4',
    layoutMode: 'fitRows'
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
});


// header-section
$(window).on("scroll", function(){
    if ($(this).scrollTop() > 150) {
      $(".main-header").addClass("active");
      $(".header-top-bar").addClass("remove");
      $(".header-logo").addClass("remove");
      $(".header-logo-2").addClass("active");
      $(".nav-link").addClass("active-2");
      $(".active-2-active").addClass("activated");
      $(".nav-link i").addClass("active");
    } else {
      $(".main-header").removeClass("active");
      $(".header-top-bar").removeClass("remove");
      $(".header-logo").removeClass("remove");
      $(".header-logo-2").removeClass("active");
      $(".nav-link").removeClass("active-2");
      $(".active-2-active").removeClass("activated");
      $(".nav-link i").removeClass("active");
    }
  });
  

  

// scroll-top btn start
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
  });
  
  $(".scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  // scroll-top btn end

// price-section js start
$(".price-filter-item-button").on("click",function(){
    $(this).addClass("active");
    $(".price-month").removeClass("active");
    $(".price-year").removeClass("active");
    $(".price").removeClass("remove");
    $(".price-filter-item-button-2").removeClass("active")
    $(".price-filter-item-button-3").removeClass("active")
})

$(".price-filter-item-button-2").on("click",function(){
    $(this).addClass("active");
    $(".price-month").addClass("active");
    $(".price").addClass("remove");
    $(".price-year").removeClass("active");
    $(".price-filter-item-button").removeClass("active")
    $(".price-filter-item-button-3").removeClass("active")
})

$(".price-filter-item-button-3").on("click",function(){
    $(this).addClass("active");
    $(".price-year").addClass("active");
    $(".price").addClass("remove");
    $(".price-month").removeClass("active");
    $(".price-filter-item-button").removeClass("active")
    $(".price-filter-item-button-2").removeClass("active")
})
// price-section js end


// message-box js start
$(".message-box-open").on("click",function(){
    $(this).addClass("remove");
    $(".message-box").addClass("active");
    $(".message-box-close").addClass("active");
});

$(".message-box-close").on("click",function(){
    $(this).removeClass("active");
    $(".message-box").removeClass("active");
    $(".message-box-open").removeClass("remove");
});
// message-box js end