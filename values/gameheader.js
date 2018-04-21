
var empty = 'back.gif';
var tile = ['img0.gif', 'img1.gif', 'img2.gif', 'img3.gif', 'img4.gif', 'img5.gif',
    'img6.gif', 'img7.gif', 'img8.gif', 'img9.gif', 'img10.gif', 'img11.gif',
    'img12.gif', 'img13.gif', 'img14.gif'];

function htmlcard(name) {
    return '<img src="' + name + '" alt="tile" \/>';
}

function makecard(i) {
    document.getElementById('t' + i).innerHTML = '<div onclick="return select(' + i + ');">' + htmlcard(empty) + '<\/div>';
}

var img = [];
for (var i = 0; i < 15; i++) {
    img[i] = new Image();
    img[i].src = tile[i];
    tile[i] = htmlcard(tile[i]);
}

var choices = [];
var tmr, tno, tid, cid, cnt;

// Specifying the function to call when loading
window.onload = load;

function load() {
    for (var i = 0; i <= 29; i++)
        makecard(i);

    tile.sort((a, b) => {
        return (Math.round(Math.random()) - 0.5);
    });
}

function select(sel) {
    document.getElementById('t' + sel).innerHTML = tile[sel];

    choices.push(sel);

    return false;
}
