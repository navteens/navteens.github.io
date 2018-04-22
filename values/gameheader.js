var cards = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5',
    'img6', 'img7', 'img8', 'img9', 'img10', 'img11',
    'img12', 'img13', 'img14', 'img15'];

// Creates the html object for a card
function htmlcard(name) {
    return '<img src="' + name + '.png" alt="' + name + '" \/>';
}

// Sets the html code for a card
function makecard(name) {
    document.getElementById('card-' + name).innerHTML = '<div onclick="select(' + name + ');">' + htmlcard(empty) + '<\/div>';
}

// Specifying the function to call when loading
window.onload = load;

function load() {
    var files = fs.readdirSync("");
    console.log(files);

    document.getElementById('size') = cards.length;

    // Sets up the images and cards with html
    var img = [];
    for (var i = 0; i < cards.length; i++) {
        img[i] = new Image();
        img[i].src = cards[i];
        cards[i] = htmlcard(cards[i]);
        makecard(i);
    }

    // Randomizes the order of the cards
    cards.sort((a, b) => {
        return (Math.round(Math.random()) - 0.5);
    });
}

function select(i) {
    document.getElementById('card-' + i).innerHTML = cards[i];

    document.getElementById('selected' + i).innerHTML = cards[i];
}
