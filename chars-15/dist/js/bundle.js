/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/parts/calk.js":
/*!******************************!*\
  !*** ./src/js/parts/calk.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calk() {
  //Calc
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0,
      ratio = 1;
  totalValue.innerHTML = 0;
  persons.addEventListener('input', function () {
    /^[0-9]*?$/.test(this.value) ? this.defaultValue = this.value : this.value = this.defaultValue;
  });
  restDays.addEventListener('input', function () {
    /^[0-9]*?$/.test(this.value) ? this.defaultValue = this.value : this.value = this.defaultValue;
  });
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000 * ratio;

    if (restDays.value == '' || personsSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      animateValue("total", 0, total, 500);
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000 * ratio;

    if (persons.value == '' || daysSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      animateValue("total", 0, total, 500);
    }
  });
  place.addEventListener('change', function () {
    ratio = this.options[this.selectedIndex].value;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      var totalA = a * ratio;
      animateValue("total", 0, totalA, 500);
    }
  });

  function animateValue(id, start, end, duration) {
    var current = start;
    var increment = 50;
    var timer = setInterval(function () {
      current += increment;
      document.getElementById(id).innerHTML = current;

      if (current == end || current > end) {
        clearInterval(timer);
      }
    }, 3);
  }
}

module.exports = calk;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.promise'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.regexp.replace'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function form() {
  // Form
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  var form = document.querySelector('.main-form'),
      formCont = document.querySelector('#form'),
      statusMessage = document.createElement('div'),
      popapClose = document.querySelector('.popup-close');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      var formInput = elem.getElementsByTagName('input');
      var flag = false;

      for (var i = 0; i < formInput.length; i++) {
        console.log(formInput[i].value.replace(/\D/g, "").length);

        if (formInput[i].value.replace(/\D/g, "").length > 10) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }

      if (flag) {
        elem.appendChild(statusMessage);

        var _input = elem.getElementsByTagName('input');

        var formData = new FormData(elem);

        function postData(data) {
          return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.addEventListener('readystatechange', function () {
              if (request.readyState < 4) {
                resolve();
              } else if (request.readyState === 4 && request.status == 200) {
                resolve();
              } else {
                reject();
              }
            });
            request.send(data);
          });
        }

        function clearInput() {
          for (var _i = 0; _i < _input.length; _i++) {
            _input[_i].value = '';
          }
        }

        postData(formData).then(function () {
          return statusMessage.innerHTML = message.loading;
        }).then(function () {
          return statusMessage.innerHTML = message.success;
        }).catch(function () {
          return statusMessage.innerHTML = message.failure;
        }).then(clearInput);
      } else {
        alert('Слишком мало символов.');
      }
    });
  }

  sendForm(form);
  sendForm(formCont);
  popapClose.addEventListener('click', function () {
    statusMessage.innerHTML = '';

    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });
}

module.exports = form;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/parts/maska.js":
/*!*******************************!*\
  !*** ./src/js/parts/maska.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.regexp.replace'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function maska() {
  //Maska
  var input = document.querySelectorAll('input[type="tel"]'),
      maska = "+7 (___) ___-____";

  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("input", mask);
  }

  function mask() {
    var i = 0,
        constant = maska.replace(/\D/g, ""),
        inputValue = this.value.replace(/\D/g, "");

    if (constant.length >= inputValue.length) {
      inputValue = constant;
    }

    this.value = maska.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < inputValue.length ? inputValue.charAt(i++) : i >= inputValue.length ? "" : a;
    });
  }
}

module.exports = maska;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  //Modal
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descrbtn = document.querySelectorAll('.description-btn');
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
  moreTabs(0);

  function moreTabs(d) {
    descrbtn[d].addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  }
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/scroll.js":
/*!********************************!*\
  !*** ./src/js/parts/scroll.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.regexp.replace'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function scroll() {
  //Плавный скрол по сайту при клике по меню
  var linkMenu = document.querySelectorAll('[href^="#"]'),
      speed = 0.7;

  for (var i = 0; i < linkMenu.length; i++) {
    linkMenu[i].addEventListener('click', function (event) {
      event.preventDefault();
      var widthTop = document.documentElement.scrollTop,
          hash = this.href.replace(/[^#]*(.*)/, '$1'),
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    }, false);
  }
}

module.exports = scroll;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom.iterable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function slider() {
  // Slider
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
    slides[slideIndex - 1].animate([{
      transform: 'translateX(500px)'
    }, {
      transform: 'translateX(0px)'
    }], 500);
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 1; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  // Получение объектов манипуляции для табов.
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent'); // Функция скрытия табов

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1); // Функция отображения таба переданых в нее.

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  } // Обработщик клика на табам


  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          moreTabs(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  // Timer
  var deadline = '2018-12-29';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function plusZero(times) {
    times < 10 ? times = '0' + times : times;
    return times;
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
    var timeInterval = setTimeout(function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = plusZero(t.hours);
      minutes.textContent = plusZero(t.minutes);
      seconds.textContent = plusZero(t.seconds);

      if (t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
        stop();
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }

      setTimeout(updateClock, 1000);
    });

    function stop() {
      clearTimeout(timeInterval);
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var calk = __webpack_require__(/*! ./parts/calk.js */ "./src/js/parts/calk.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
      maska = __webpack_require__(/*! ./parts/maska.js */ "./src/js/parts/maska.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
      scroll = __webpack_require__(/*! ./parts/scroll.js */ "./src/js/parts/scroll.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");

  calk();
  form();
  maska();
  modal();
  scroll();
  slider();
  tabs();
  timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map