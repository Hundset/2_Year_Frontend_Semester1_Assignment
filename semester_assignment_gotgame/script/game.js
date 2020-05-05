
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

var defaultposition = 1;

var player1Count = 1;

var player2Count = 1;

var position1 = document.getElementById("board-tile-" + player1Count);

var position2 = document.getElementById("board-tile-" + player2Count);

var alert = document.getElementById("trap-alert");


    if (localStorage.length === 2) {

        var token1 = document.createElement('div')
        token1.setAttribute("class", "token")
        token1.setAttribute("id", "token1")
        token1.innerHTML = "P1";
        position1.appendChild(token1);

    }

    if (localStorage.length === 2) {

        var token2 = document.createElement('div')
        token2.setAttribute("class", "token")
        token2.setAttribute("id", "token2")
        token2.innerHTML = "P2";
        position2.appendChild(token2);

    }

function rollDice() {

    if(playerTurn === 1) {
        
        playerTurn = 2;

        var roll = Math.floor( Math.random() * 6 ) +1;

        console.log("Player 1 rolled " + roll);

        var score1 = roll + player1Count;

        player1Count = score1;
        
        console.log(player1Count);

        function placeToken1() {

            position1 = document.getElementById("board-tile-" + score1);

            position1.appendChild(token1);

        }

        placeToken1();

        switch (player1Count) {

        case 5:

            alert.innerHTML = "You must pay the toll to cross the bridge - you refuse and take a detour (you go back 1 move)";
    
            score1 = 4;

            player1Count = score1;

            placeToken1();
            break;
            
        case 10:

            alert.innerHTML = "You are assaulted by a Thenn ambush, you retreat to recover (you go back 1 move)";
    
            score1 = 9;

            player1Count = score1;

            placeToken1();
            break;
        
        case 15:

            if (player1 === Jon || player1 === Arya) {
                alert.innerHTML = "You chance upon one of your family's Direwolves - to your sorrow, they have been turned by the white walkers and no longer recognize you as their kin - you are forced to fight, or to flee (you go back 2 moves";
            } else {
                alert.innerHTML = "You have crossed the Stark family, one of their ferocious Direwolves leap to their defense (you go back 2 moves)";
            }
    
            score1 = 13;

            player1Count = score1;

            placeToken1();
            break;

        case 20:

            if (player1 === Jaime || player1 === Tyrion) {
                alert.innerHTML = "Cersei will no longer risk competition for the Iron Throne, be they kin or otherwise, and the Mountain is set upon you, you must retreat! (you go back 2 moves";
            }
            else {

                alert.innerHTML = "You have become an obstacle to House Lannister and they have set the Mountain upon you, you must retreat! (you go back 2 moves)";

            }
    
            score1 = 18;

            player1Count = score1;

            placeToken1();
            break;

        case 25:

            if (player1 === Dany) {

                alert.innerHTML = "You have lost control of one of your dragons! The other leaps to your defense, but you are forced to retreat in order to escape the resulting onslaught (you go back 3 moves)";

            }
            else if (player2 === Worm) {

                alert.innerHTML = "Daenerys has lost control of one of her dragons! You resolve to help her flee - escorting your liberator away from harm (you go back 3 moves)";

            }
            else {
                
                alert.innerHTML = "The sole remaining heir to house Targaryen, the mother of Dragons, recognizes you as too great a risk and one of her dragons descend upon you. You stand no chance, flee! (you go back 3 moves)";
            }
    
            score1 = 22;

            player1Count = score1;

            placeToken1();
            break;

        case 30:

            alert.innerHTML = "You stand before the Night King. Facing a white Walker is perilous enough on its own, you stand no chance against his undead army. Flee, or face certain (un)death (you go back 4 moves)";

            score1 = 26

            player1Count = score1;
            
            placeToken1();
            break;

        default: 
        
            alert.innerHTML = "";
            break;
            
        }

    }
    else {

        playerTurn = 1;

        var roll = Math.floor( Math.random() * 6 ) +1;

        console.log("Player 2 rolled " + roll);

        var score2 = roll + player2Count;

        player2Count = score2;

        console.log(player2Count);

        position2 = document.getElementById("board-tile-" + score2);

        position2.appendChild(token2);

        function placeToken2() {

            position2 = document.getElementById("board-tile-" + score2);

            position2.appendChild(token2);

        }

        placeToken2();

        switch (player2Count) {

            case 5:

                alert.innerHTML = "You must pay the toll to cross the bridge - you refuse and take a detour (you go back 1 move)";
        
                score2 = 4;
    
                player2Count = score2;
    
                placeToken2();
                break;
                
            case 10:

                alert.innerHTML = "You are assaulted by a Thenn ambush, you retreat to recover (you go back 1 move)"
        
                score2 = 9;
    
                player2Count = score2;
    
                placeToken2();
                break;
            
            case 15:
    
                if (player2 === Jon || player2 === Arya) {
                    alert.innerHTML = "You chance upon one of your family's Direwolves - to your sorrow, they have been turned by the white walkers and no longer recognize you as their kin - you are forced to fight, or to flee (you go back 2 moves)"
                } else {
                    alert.innerHTML = "You have crossed the Stark family, one of their ferocious Direwolves leap to their defense (you go back 2 moves)"
                }
        
                score2 = 13;
    
                player2Count = score2;
    
                placeToken2();
                break;
    
            case 20:
    
                if (player2 === Jaime || player2 === Tyrion) {
                    alert.innerHTML = "Cersei will no longer risk competition for the Iron Throne, not even from her closest kin, and the Mountain is set upon you, you must retreat! (you go back 2 moves"
                }
                else {
    
                    alert.innerHTML = "You have become an obstacle to House Lannister and they have set the Mountain upon you, you must retreat! (you go back 2 moves)"
    
                }
        
                score2 = 18;
    
                player2Count = score2;
    
                placeToken2();
                break;
    
            case 25:
    
                if (player2 === Dany) {
    
                    alert.innerHTML = "You have lost control of one of your dragons! The other leaps to your defense, but you are forced to retreat in order to escape the resulting onslaught (you go back 3 moves)"
    
                }
                else if (player2 === Worm) {

                    alert.innerHTML = "Daenerys has lost control of one of her dragons! You resolve to help her flee - escorting your liberator away from harm (you go back 3 moves)"

                }
                else {
                    
                    alert.innerHTML = "The sole remaining heir to house Targaryen, the mother of Dragons, recognizes you as too great a risk and one of her dragons descend upon you. You stand no chance, flee! (you go back 3 moves)"
                }
        
                score2 = 22;
    
                player2Count = score2;
    
                placeToken2();
                break;
    
            case 30:
    
                alert.innerHTML = "You stand before the Night King. Facing a white Walker is perilous enough on its own, you stand no chance against his undead army. Flee, or face certain (un)death (you go back 4 moves)"
    
                score2 = 26
    
                player2Count = score2;
                
                placeToken2();
                break;

                default: 
                
                    alert.innerHTML = "";
                    break;
                    
                }
    }

}

