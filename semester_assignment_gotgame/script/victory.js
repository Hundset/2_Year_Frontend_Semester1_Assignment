
var Jon = "Jon Stark";
var Tyrion = "Tyrion Lannister";
var Arya = "Arya Stark";
var Dany = "Daenerys Targaryen";
var Jaime = "Jaime Lannister";
var Brienne = "Brienne of Tarth" ;
var Hound = "Sandor Clegane";
var Worm = "Grey Worm";
var Melisa = "Melisandre";
var Varys = "Varys";

var characters = [Jon, Tyrion, Dany, Arya, Jaime, Brienne, Hound, Worm, Melisa, Varys]

var jonImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Jon.png"
var tyrionImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Tyrion.png"
var aryaImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Arya.png"
var danyImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Dany.png"
var jaimieImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Jaime.png"
var brienneImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Brienne.png" 
var houndImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Hound.png"
var wormImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Worm.png"
var melisaImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Melisa.png"
var varysImg = "http://www.hundsie.com/semester_assignment_gotgame/media/Varys.png"

var winner = localStorage.getItem('winner');

var winnerCard = document.getElementById("winner-card")

var winDiv = document.createElement('div');

                winDiv.setAttribute("class", "winner-div");

                var winImage = document.createElement('img');
                winImage.setAttribute("id", "winner-image");

                var winName = document.createElement('p');
                winName.setAttribute("class", "winner-name");

                winName.innerHTML = winner + " wins!";

                winDiv.appendChild(winImage);

                winDiv.appendChild(winName);

                winnerCard.appendChild(winDiv);

                    switch (winner) {  
                    
                    case Jon :

                        winImage.setAttribute("src", jonImg);
                        break; 

                    case Tyrion : 
                        winImage.setAttribute("src", tyrionImg); 
                        break; 
                    
                    case Dany :
                        winImage.setAttribute("src", danyImg);  
                        break;

                    case Arya :
                        winImage.setAttribute("src", aryaImg);  
                        break;

                    case Jaime : 
                        winImage.setAttribute("src", jaimieImg);  
                        break;

                    case Brienne :
                        winImage.setAttribute("src", brienneImg);  
                        break;

                    case Hound : 
                        winImage.setAttribute("src", houndImg);  
                        break;

                    case Worm : 
                        winImage.setAttribute("src", wormImg);  
                        break;

                    case Melisa : 
                        winImage.setAttribute("src", melisaImg);  
                        break;

                    case Varys : 
                        winImage.setAttribute("src", varysImg);  
                        break;
                    }

    function flipzoom() {
        
       var base = 0

       base += 360;
        winnerCard.style.transform = "rotatey(" + base + "deg)";
        winnerCard.style.transitionDuration = "1s";

    }

    flipzoom();