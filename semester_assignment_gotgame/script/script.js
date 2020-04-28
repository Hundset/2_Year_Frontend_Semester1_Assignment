
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        object = JSON.parse(this.responseText);

        var Jon = object[583].Name
        var Tyrion = object[1051].Name
        var Arya = object[147].Name
        var Dany = object[270].Name
        var Jaime = object[528].Name
        var Brienne = object[215].Name 
        var Hound = object[954].Name
        var Worm = object[1444].Name
        var Melisa = object[742].Name
        var Varys = object[2064].Name
        
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

        function createChars() {

            var charContainer = document.getElementById("characters");

            for (char of characters) {    

                var charDiv = document.createElement('div');
                charDiv.setAttribute("class", "playercards")

                var profileImg = document.createElement('img')

                var charName = document.createElement('button')
                charName.setAttribute("class", "character-button")
                charName.setAttribute("id", "select_" + char)

                charName.innerHTML = char;

                charDiv.appendChild(profileImg);

                charDiv.appendChild(charName);

                charContainer.appendChild(charDiv);

                    if (char === characters[0]) {

                        profileImg.setAttribute("src", jonImg);
                    } 
                    if (char === characters[1]) {
                        profileImg.setAttribute("src", tyrionImg);  
                    }
                    if (char === characters[2]) {
                        profileImg.setAttribute("src", danyImg);  
                    }
                    if (char === characters[3]) {
                        profileImg.setAttribute("src", aryaImg);  
                    }
                    if (char === characters[4]) {
                        profileImg.setAttribute("src", jaimieImg);  
                    }
                    if (char === characters[5]) {
                        profileImg.setAttribute("src", brienneImg);  
                    }
                    if (char === characters[6]) {
                        profileImg.setAttribute("src", houndImg);  
                    }
                    if (char === characters[7]) {
                        profileImg.setAttribute("src", wormImg);  
                    }
                    if (char === characters[8]) {
                        profileImg.setAttribute("src", melisaImg);  
                    }
                    if (char === characters[9]) {
                        profileImg.setAttribute("src", varysImg);  
                    }

            }
        }
        createChars();

            document.getElementById("select_Jon Stark").addEventListener("click", function() {
                const Jon = {
                    name: "Jon Snow"
                }

                window.localStorage.setItem('player1', JSON.stringify(Jon));
                    console.log("Success")
                    }
            );

        /*var playerContainer = document.getElementsByClassName("selected-char1");
        var player1 = localStorage.getItem('player1');

        playerContainer.appendChild(player1)*/
    }  
};

request.open('GET', 'https://raw.githubusercontent.com/joakimskoog/AnApiOfIceAndFire/master/data/characters.json');
request.send();