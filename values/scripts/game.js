class Game {
    constructor() {
        console.log("Creating Game object");

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage(this.canvas);

        createjs.Ticker.on("tick", this.stage);

        var circle = new createjs.Shape();
        circle.graphics.beginFill("blue").drawCircle(0, 0, 40);
        circle.x = 100;
        circle.y = 200;
        this.stage.addChild(circle);
    }
}

var game = new Game();


// var cards = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5',
//     'img6', 'img7', 'img8', 'img9', 'img10', 'img11',
//     'img12', 'img13', 'img14', 'img15'];

// // Creates the html object for a card
// function htmlcard(name) {
//     return '<img src="' + name + '.png" alt="' + name + '" \/>';
// }

// // Sets the html code for a card
// function makecard(name) {
//     document.getElementById('card-' + name).innerHTML = '<div onclick="select(' + name + ');"><\/div>';
// }

// function select(name) {
//     document.getElementById('card-' + name).innerHTML = cards[i];

//     document.getElementById('selected-' + name).innerHTML = cards[i];

//     console.log("Selected " + cards[i]);
// }

// function load() {
//     document.getElementById('size').innerHTML = '<object value=' + cards.length + '><\/object>';

//     console.log("Number of cards: " + document.getElementById('size').getAttribute('value'));

//     return;

//     // Sets up the images and cards with html
//     var img = [];
//     for (var i = 0; i < cards.length; i++) {
//         img[i] = new Image();
//         img[i].src = cards[i];
//         cards[i] = htmlcard(cards[i]);
//         makecard(i);

//         console.log("Made card: " + cards[i]);
//     }
// }


// // Specifying the function to call when loading
// window.onload = load;
