
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

function displaycard(i) {
    document.getElementById('t' + i).innerHTML = '<div onclick="select(' + i + ');return false;">' + card(empty) + '<\/div>';
}

var img = [];
for (var i = 0; i < 15; i++) {
    img[i] = new Image();
    img[i].src = tile[i];
    tile[i] = card(tile[i]);
}

var choices = [];
var tmr, tno, tid, cid, cnt;

// Specifying the function to call when loading
window.onload = start;

function start() {
    for (var i = 0; i <= 29; i++)
        displaycard(i);
    // clearInterval(tid);
    tmr = cnt = 0;
    tile.sort(randOrd);
    cntr();
    // tid = setInterval('cntr()', 1000);
}

// function cntr() {
//     var min = math.floor(tmr / 60);
//     var sec = tmr % 60;
//     document.getelementbyid('cnt').value = min + ':' + (sec < 10 ? '0' : '') + sec;
//     tmr++;
// }

function select(sel) {
    document.getElementById('t' + sel).innerHTML = tile[sel];

    choices.push(sel);
}
