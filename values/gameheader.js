
var empty = 'back.gif';
var cards = ['img0.gif', 'img1.gif', 'img2.gif', 'img3.gif', 'img4.gif', 'img5.gif',
    'img6.gif', 'img7.gif', 'img8.gif', 'img9.gif', 'img10.gif', 'img11.gif',
    'img12.gif', 'img13.gif', 'img14.gif'];

function htmlcard(name) {
    return '<img src="' + name + '" alt="cards" \/>';
}

function makecard(name) {
    document.getElementById('card' + name).innerHTML = '<div onclick="select(' + name + ');">' + htmlcard(empty) + '<\/div>';
}

var img = [];
for (var i = 0; i < 15; i++) {
    img[i] = new Image();
    img[i].src = cards[i];
    cards[i] = htmlcard(cards[i]);
}

// Specifying the function to call when loading
window.onload = load;

function load() {
    for (var i = 0; i < cards.length; i++)
        makecard(i);

    cards.sort((a, b) => {
        return (Math.round(Math.random()) - 0.5);
    });
}

var selected = [];
function select(sel) {
    document.getElementById('card' + sel).innerHTML = cards[sel];

    selected.push(sel);
}
