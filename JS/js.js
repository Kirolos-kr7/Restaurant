/*global document,$ */

$(document).ready(function () {});

const sizeFix = function () {
  $("nav ul").css({
    height: "calc(100% - " + $(".title").css("height") + ")",
  });
  console.log($("nav ul").css("height"));
  console.log("calc(100% - " + $(".title").css("height") + ")");
};

const homeShow = function (runTime) {
  $(".home").fadeIn(runTime);
  $(".menu").fadeOut(runTime);
  $(".about").fadeOut(runTime);
  $(".staff").fadeOut(runTime);
  $(".contact").fadeOut(100);
};
const menuShow = function (runTime) {
  $(".menu").fadeIn(runTime);
  $(".home").fadeOut(runTime);
  $(".about").fadeOut(runTime);
  $(".staff").fadeOut(runTime);
  $(".contact").fadeOut(runTime);
};
const aboutShow = function (runTime) {
  $(".about").fadeIn(runTime);
  $(".home").fadeOut(runTime);
  $(".menu").fadeOut(runTime);
  $(".staff").fadeOut(runTime);
  $(".contact").fadeOut(runTime);
};
const staffShow = function (runTime) {
  $(".staff").fadeIn(runTime);
  $(".home").fadeOut(runTime);
  $(".about").fadeOut(runTime);
  $(".menu").fadeOut(runTime);
  $(".contact").fadeOut(runTime);
};
const contactShow = function (runTime) {
  $(".contact").fadeIn(runTime);
  $(".home").fadeOut(runTime);
  $(".about").fadeOut(runTime);
  $(".menu").fadeOut(runTime);
  $(".staff").fadeOut(runTime);
};

$("#home-btn").click(function () {
  homeShow(100);
  location.hash = "";
});

$("#menu-btn").click(function () {
  menuShow(100);
  location.hash = "menu";
});

$("#about-btn").click(function () {
  aboutShow(100);
  location.hash = "about";
});

$("#staff-btn").click(function () {
  staffShow(100);
  location.hash = "staff";
});

$("#contact-btn").click(function () {
  contactShow(100);
  location.hash = "contact";
});

if (window.location.hash == "") {
  homeShow(0);
} else if (window.location.hash == "#menu") {
  menuShow(0);
} else if (window.location.hash == "#about") {
  aboutShow(0);
} else if (window.location.hash == "#staff") {
  staffShow(0);
} else if (window.location.hash == "#contact") {
  contactShow(0);
}

let timeout = 500;

$(".slidebtn").click(function () {
  $(".fa-chevron-right").fadeToggle(5);
  $(".fa-chevron-left").fadeToggle(5);
  $("nav").toggleClass("nav-width");
  $("nav img").fadeToggle(500);
  $("nav h1").fadeToggle(400);
  $("nav ul")
    .delay(timeout)
    .queue(function (next) {
      $("nav ul").toggleClass("flex");
      if (timeout == 100) {
        timeout = 500;
      } else {
        timeout = 100;
      }
      next();
    });
  $(".home,.menu,.about,.contact,.staff").toggleClass("window-width");
  $(".home,.menu,.about,.contact,.staff").toggleClass("brightness");
});

$("h1, .title img").click(function () {
  homeShow(100);
});
