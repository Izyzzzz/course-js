window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let calk = require('./parts/calk'),
    form = require('./parts/form'),
    maska = require('./parts/maska'),
    modal = require('./parts/modal'),
    scroll = require('./parts/scroll'),
    slider = require('./parts/slider'),
    tabs = require('./parts/tabs'),
    timer = require('./parts/timer');

    calk();
    form();
    maska();
    modal();
    scroll();
    slider();
    tabs();
    timer();

});