
var empty = 'back.gif';
var tile = ['img0.gif', 'img1.gif', 'img2.gif', 'img3.gif', 'img4.gif', 'img5.gif',
    'img6.gif', 'img7.gif', 'img8.gif', 'img9.gif', 'img10.gif', 'img11.gif',
    'img12.gif', 'img13.gif', 'img14.gif'];

function randOrd(a, b) {
    return (Math.round(Math.random()) - 0.5);
}

function card(name) {
    return '<img src="' + name + '" alt="tile" \/>';
}

function displayBack(i) {
    document.getElementById('t' + i).innerHTML = '<div onclick="select(' + i + ');return false;">' + card(empty) + '<\/div>';
}


var im = [];
for (var i = 0; i < 15; i++) {
    im[i] = new Image();
    im[i].src = tile[i];
    tile[i] = card(tile[i]);
    tile[i + 15] = tile[i];
}

var choices = [];
var tmr, tno, tid, cid, cnt;
window.onload = start;

function start() {
    for (var i = 0; i <= 29; i++)
        displayBack(i);
    clearInterval(tid);
    tmr = tno = cnt = 0;
    tile.sort(randOrd);
    cntr();
    tid = setInterval('cntr()', 1000);
}

function cntr() {
    var min = Math.floor(tmr / 60);
    var sec = tmr % 60;
    document.getElementById('cnt').value = min + ':' + (sec < 10 ? '0' : '') + sec;
    tmr++;
}

function select(sel) {
    document.getElementById('t' + sel).innerHTML = tile[sel];

    choices.push(sel);
}

function conceal() {
    tno = 0;
    if (tile[ch1] != tile[ch2]) {
        displayBack(ch1);
        displayBack(ch2);
    }
    else
        cnt++;
    if (cnt >= 15)
        clearInterval(tid);
}
