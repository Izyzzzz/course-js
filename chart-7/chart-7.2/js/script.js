'use strict';

function plusZero(times) {
    times < 10 ? times = '0' + times : times;
    return times;
}

function time() {
    let Data = new Date();
    let date_time = plusZero(Data.getHours()) + ':' + plusZero(Data.getMinutes()) + ':' + plusZero(Data.getSeconds());
    if (document.layers) {
        document.layers.doc_time.document.write(date_time);
        document.layers.doc_time.document.close();
    } else document.getElementById("time-day").innerHTML = date_time;
    setTimeout("time()", 1000);
}
time();