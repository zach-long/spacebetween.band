!function o(c,a,s){function u(n,e){if(!a[n]){if(!c[n]){var r="function"==typeof require&&require;if(!e&&r)return r(n,!0);if(l)return l(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var t=a[n]={exports:{}};c[n][0].call(t.exports,function(e){return u(c[n][1][e]||e)},t,t.exports,o,c,a,s)}return a[n].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)u(s[e]);return u}({1:[function(e,n,r){"use strict";function i(){!function(){var e=window.navigator.userAgent,n=e.indexOf("MSIE "),r=e.indexOf("Trident/");return 0<n||0<r}()||alert("This site is not intended to work with Internet Explorer. For the proper experience, please use a modern browser like Firefox or Chrome.")}$(document).ready(function(){$(document).on("click",".site-nav a",function(e){$(this).parent().addClass("active").siblings().removeClass("active")}),$(document).on("click",".music-link a",function(e){$(".nav-item").siblings().removeClass("active"),$("#nav-music").addClass("active")}),$(".collapse .nav-item").on("click",function(){$(".collapse").collapse("hide")}),i()})},{}]},{},[1]);