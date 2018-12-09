window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let calk = require('./parts/calk.js'),
    form = require('./parts/form.js'),
    maska = require('./parts/maska.js'),
    modal = require('./parts/modal.js'),
    scroll = require('./parts/scroll.js'),
    slider = require('./parts/slider.js'),
    tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js');

    calk();
    form();
    maska();
    modal();
    scroll();
    slider();
    tabs();
    timer();

});