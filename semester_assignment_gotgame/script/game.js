
var Jon = "Jon Stark";
var Tyrion = "Tyrion Lannister";
var Arya = "Arya Stark";
var Dany = "Daenerys Targaryen";
var Jaime = "Jaime Lannister";
var Brienne = "Brienne of Tarth" ;
var Hound = "Sandor Clegange";
var Worm = "Grey Worm";
var Melisa = "Melisandre";
var Varys = "Varys";

var characters = [Jon, Tyrion, Dany, Arya, Jaime, Brienne, Hound, Worm, Melisa, Varys]

var jonToken = "http://www.hundsie.com/semester_assignment_gotgame/media/jon-token-8.png";
var tyrionToken = "http://www.hundsie.com/semester_assignment_gotgame/media/tyrion-token-8.png";
var aryaToken = "http://www.hundsie.com/semester_assignment_gotgame/media/jon-token-8.png";
var danyToken = "http://www.hundsie.com/semester_assignment_gotgame/media/tyrion-token-8.png";
var jaimeToken = "http://www.hundsie.com/semester_assignment_gotgame/media/jon-token-8.png";
var brienneToken = "http://www.hundsie.com/semester_assignment_gotgame/media/tyrion-token-8.png";
var houndToken = "http://www.hundsie.com/semester_assignment_gotgame/media/jon-token-8.png";
var wormToken = "http://www.hundsie.com/semester_assignment_gotgame/media/tyrion-token-8.png";
var melisaToken = "http://www.hundsie.com/semester_assignment_gotgame/media/jon-token-8.png";
var varysToken = "http://www.hundsie.com/semester_assignment_gotgame/media/tyrion-token-8.png";

var charImgs = [jonToken, tyrionToken, aryaToken, danyToken, jaimeToken, brienneToken, houndToken, wormToken, melisaToken, varysToken]

var player1 = document.getElementById("selected-char1").innerHTML = localStorage.getItem('player1');
var player2 = document.getElementById("selected-char2").innerHTML = localStorage.getItem('player2');

var playerTurn = 1;

var dice = document.getElementById("dice");

var player1Count = 0;

var player2Count = 0;

var tiles = document.querySelectorAll(".tile"), i;

var position = tiles[0];

function makeToken() {

    if (localStorage.length === 2) {

        var token = document.createElement('div')
        token.setAttribute("class", "token")
        token.setAttribute("id", "token1")
        token.innerHTML = "P1";
        position.appendChild(token);

    }

    if (localStorage.length === 2 && player2Count === 0) {

        var token = document.createElement('div')
        token.setAttribute("class", "token")
        token.setAttribute("id", "token2")
        token.innerHTML = "P2";
        position.appendChild(token);

    }
}

makeToken();

function rollDice() {

    if(playerTurn === 1) {
        
        playerTurn = 2;

        var roll = Math.floor( Math.random() * 6 ) +1;

        console.log("Player 1 rolled " + roll);

        var score1 = roll + player1Count;

        player1Count = score1;

        console.log(player1Count);

    }
    else {

        playerTurn = 1;

        var roll = Math.floor( Math.random() * 6 ) +1;

        console.log("Player 2 rolled " + roll);

        var score2 = roll + player2Count;

        player2Count = score2;

        console.log(player2Count);

    }

}

