'use strict';

class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv () {
        document.body.innerHTML = `<div id='options'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>`;
        document.getElementById('options').style.cssText = `width:${this.width}px;height:${this.height}px;background:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign};`;
    }
}

const options = new Options(200, 800, 'red', 35, 'center');

options.newDiv();