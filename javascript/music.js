!function i(u,f,a){function c(e,n){if(!f[e]){if(!u[e]){var r="function"==typeof require&&require;if(!n&&r)return r(e,!0);if(d)return d(e,!0);var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var o=f[e]={exports:{}};u[e][0].call(o.exports,function(n){return c(u[e][1][n]||n)},o,o.exports,i,u,f,a)}return f[e].exports}for(var d="function"==typeof require&&require,n=0;n<a.length;n++)c(a[n]);return c}({1:[function(n,e,r){"use strict";!function(){for(var o=document.getElementsByClassName("download"),n=function(n){var e=o[n],r=o[n].getAttribute("data-name"),t="download/".concat(r);e.addEventListener("click",function(){window.open(t)})},e=0;e<o.length;e++)n(e)}()},{}]},{},[1]);