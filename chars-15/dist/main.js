!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){window.addEventListener("DOMContentLoaded",function(){"use strict";let e=n(1),t=n(2),o=n(3),l=n(4),r=n(5),u=n(6),c=n(7),i=n(8);e(),t(),o(),l(),r(),u(),c(),i()})},function(e,t){e.exports=function(){let e=document.querySelectorAll(".counter-block-input")[0],t=document.querySelectorAll(".counter-block-input")[1],n=document.getElementById("select"),o=document.getElementById("total"),l=0,r=0,u=0,c=1;function i(e,t,n){let o=t,l=setInterval(function(){o+=50,document.getElementById(e).innerHTML=o,(o==n||o>n)&&clearInterval(l)},3)}o.innerHTML=0,e.addEventListener("input",function(){/^[0-9]*?$/.test(this.value)?this.defaultValue=this.value:this.value=this.defaultValue}),t.addEventListener("input",function(){/^[0-9]*?$/.test(this.value)?this.defaultValue=this.value:this.value=this.defaultValue}),e.addEventListener("change",function(){l=+this.value,u=4e3*(r+l)*c,""==t.value||0==t.value||0==l?o.innerHTML=0:i("total",0,u)}),t.addEventListener("change",function(){r=+this.value,u=4e3*(r+l)*c,""==e.value||0==e.value||0==r?o.innerHTML=0:i("total",0,u)}),n.addEventListener("change",function(){c=this.options[this.selectedIndex].value,""==t.value||""==e.value||0==e.value||0==t.value?o.innerHTML=0:i("total",0,u*c)})}},function(e,t){e.exports=function(){let e={loading:"Загрузка...",success:"Спасибо! Скоро мы с вами свяжемся!",failure:"Что-то пошло не так..."},t=document.querySelector(".main-form"),n=document.querySelector("#form"),o=document.createElement("div"),l=document.querySelector(".popup-close");function r(t,n){let r=t.getElementsByTagName("input");t.addEventListener("submit",function(l){l.preventDefault();let u=!1;if(u=t.getElementsByTagName("input")[n].value.replace(/\D/g,"").length>10){t.appendChild(o);let n=new FormData(t);(c=n,new Promise(function(e,t){let n=new XMLHttpRequest;n.open("POST","server.php"),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.addEventListener("readystatechange",function(){n.readyState<4?e():4===n.readyState&&200==n.status?e():t()}),n.send(c)})).then(()=>o.innerHTML=e.loading).then(()=>o.innerHTML=e.success).catch(()=>o.innerHTML=e.failure).then(function(){for(let e=0;e<r.length;e++)r[e].value=""})}else alert("Слишком мало символов.");var c}),l.addEventListener("click",function(){o.innerHTML="";for(let e=0;e<r.length;e++)r[e].value=""})}o.classList.add("status"),r(t,0),r(n,1)}},function(e,t){e.exports=function(){let e=document.querySelectorAll('input[type="tel"]'),t="+7 (___) ___-____";for(let t=0;t<e.length;t++)e[t].addEventListener("input",n);function n(){let e=0,n=t.replace(/\D/g,""),o=this.value.replace(/\D/g,"");n.length>=o.length&&(o=n),this.value=t.replace(/./g,function(t){return/[_\d]/.test(t)&&e<o.length?o.charAt(e++):e>=o.length?"":t})}}},function(e,t){e.exports=function(){let e=document.querySelector(".more"),t=document.querySelector(".overlay"),n=document.querySelector(".popup-close");e.addEventListener("click",function(){t.style.display="block",this.classList.add("more-splash"),document.body.style.overflow="hidden"}),n.addEventListener("click",function(){t.style.display="none",e.classList.remove("more-splash"),document.body.style.overflow=""})}},function(e,t){e.exports=function(){let e=document.querySelectorAll('[href^="#"]'),t=.7;for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(e){e.preventDefault();let n=document.documentElement.scrollTop,o=this.href.replace(/[^#]*(.*)/,"$1"),l=document.querySelector(o).getBoundingClientRect().top,r=null;requestAnimationFrame(function e(u){null===r&&(r=u);let c=u-r,i=l<0?Math.max(n-c/t,n+l):Math.min(n+c/t,n+l);document.documentElement.scrollTo(0,i),i!=n+l?requestAnimationFrame(e):location.hash=o})},!1)}},function(e,t){e.exports=function(){let e=1,t=document.querySelectorAll(".slider-item"),n=document.querySelector(".prev"),o=document.querySelector(".next"),l=document.querySelector(".slider-dots"),r=document.querySelectorAll(".dot");function u(n){n>t.length&&(e=1),n<1&&(e=t.length),t.forEach(e=>e.style.display="none"),r.forEach(e=>e.classList.remove("dot-active")),t[e-1].style.display="block",r[e-1].classList.add("dot-active"),t[e-1].animate([{transform:"translateX(500px)"},{transform:"translateX(0px)"}],500)}function c(t){u(e+=t)}u(e),n.addEventListener("click",function(){c(-1)}),o.addEventListener("click",function(){c(1)}),l.addEventListener("click",function(t){for(let n=1;n<r.length+1;n++)t.target.classList.contains("dot")&&t.target==r[n-1]&&u(e=n)})}},function(e,t){e.exports=function(){let e=document.querySelectorAll(".info-header-tab"),t=document.querySelector(".info-header"),n=document.querySelectorAll(".info-tabcontent"),o=document.querySelectorAll(".description-btn"),l=document.querySelector(".overlay");function r(e){for(let t=e;t<n.length;t++)n[t].classList.remove("show"),n[t].classList.add("hide")}function u(e){o[e].addEventListener("click",function(){l.style.display="block",this.classList.add("more-splash"),document.body.style.overflow="hidden"})}r(1),t.addEventListener("click",function(t){let o=t.target;if(o&&o.classList.contains("info-header-tab"))for(let t=0;t<e.length;t++)if(o==e[t]){r(0),n[l=t].classList.contains("hide")&&(n[l].classList.remove("hide"),n[l].classList.add("show")),u(t);break}var l}),u(0)}},function(e,t){e.exports=function(){function e(e){return e<10&&(e="0"+e),e}!function(t,n){let o=document.getElementById(t),l=o.querySelector(".hours"),r=o.querySelector(".minutes"),u=o.querySelector(".seconds"),c=setTimeout(function t(){let o=function(e){let t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60);return{total:t,hours:Math.floor(t/36e5),minutes:o,seconds:n}}(n);l.textContent=e(o.hours),r.textContent=e(o.minutes),u.textContent=e(o.seconds),o.hours<=0&&o.minutes<=0&&o.seconds<=0&&(clearTimeout(c),l.textContent="00",r.textContent="00",u.textContent="00"),setTimeout(t,1e3)})}("timer","2018-12-29")}}]);