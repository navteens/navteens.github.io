
var cards = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5',
    'img6', 'img7', 'img8', 'img9', 'img10', 'img11',
    'img12', 'img13', 'img14', 'img15'];

// Creates the html object for a card
function htmlcard(name) {
    return '<img src="' + name + '.png" alt="' + name + '" \/>';
}

// Sets the html code for a card
function makecard(name) {
    document.getElementById('card-' + name).innerHTML = '<div onclick="select(' + name + ');"><\/div>';
}

function select(name) {
    document.getElementById('card-' + name).innerHTML = cards[i];

    document.getElementById('selected-' + name).innerHTML = cards[i];

    console.log("Selected " + cards[i]);
}

function load() {
    var sizeElem = document.createElement('size');
    sizeElem.setAttribute('value', cards.length);

    console.log("Number of cards: " + document.getElementByName('size').getAttribute('value'));

    return;

    // Sets up the images and cards with html
    var img = [];
    for (var i = 0; i < cards.length; i++) {
        img[i] = new Image();
        img[i].src = cards[i];
        cards[i] = htmlcard(cards[i]);
        makecard(i);

        console.log("Made card: " + cards[i]);
    }
}


// Specifying the function to call when loading
window.onload = load;
