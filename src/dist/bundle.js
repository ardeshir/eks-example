!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=[],r=!0;function s(e){r&&o.push(e),console.log(o)}function l(e,t){let n=e+t;return s(n),n}function c(e,t){let n=e-t;return s(n),n}const i="https://jsonplaceholder.typicode.com/posts";let u=new class{constructor(e,t,n){this.firstName=e,this.lastName=t,this.age=n}}("Ardeshir","Sepahsalar",47);var a;!function(e){console.log(`${e.firstName} ${e.lastName} - ${e.age}`)}(u),function(e){console.log(`Hello, I am ${e.firstName}`)}(u),function(e){e.age>=18?console.log(`${e.firstName} is old enough, let's drink!`):console.log(`${e.firstName} is NOT an adult`)}(u),new class{constructor(e){this.httpClient=e}printPosts(){this.httpClient.get(i).then(e=>{console.log("Posts : ",e)})}}(new class{get(e){return fetch(e).then(e=>e.json())}}).printPosts(),document.getElementById("body-text").appendChild(((a=document.createElement("div")).innerHTML="...dependencies loaded!",a)),l(1,2),l(1,2),c(5,3),l(3,3),c(8,4),l(5,3),r=!1}]);