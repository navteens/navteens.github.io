class Game {
    constructor() {
        console.log("Creating Game object");

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage("game-canvas");

        createjs.Ticker.framerate = 30;
        createjs.Ticker.addEventListener("tick", (event) => {
            this.stage.update()
        });

        console.log("Framerate=" + createjs.Ticker.framerate);

        var circle = new createjs.Shape();
        circle.graphics.beginFill("#00ff00").drawCircle(0, 0, 40);
        circle.x = 10;
        circle.y = 20;
        this.stage.addChild(circle);

        console.log("Made a circle");

        var square = new createjs.Shape();
        square.graphics.beginFill("gold").drawRect(0, 0, 100, 100);
        square.x = 50;
        square.y = 50;
        this.stage.addChild(square);

        console.log("Made a square");

        var img = new createjs.Bitmap("images/img0.png");
        img.x = 200;
        img.y = 50;
        this.stage.addChild(img);
    }
}

var game = new Game();


var cards = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5',
    'img6', 'img7', 'img8', 'img9', 'img10', 'img11',
    'img12', 'img13', 'img14', 'img15'];

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
    document.getElementById('size').innerHTML = '<object value=' + cards.length + '><\/object>';

    console.log("Number of cards: " + document.getElementById('size').getAttribute('value'));

    return;

    // Sets up the images and cards with html
    var img = [];
    for (var i = 0; i < cards.length; i++) {
        img[i] = new Image();
        img[i].src = cards[i];
        cards[i] = '<img src="' + name + '.png" alt="' + name + '" \/>';
        makecard(i);

        console.log("Made card: " + cards[i]);
    }
}


// Specifying the function to call when loading
window.onload = load;
