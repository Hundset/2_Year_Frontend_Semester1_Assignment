
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
        var char

        function createChars() {

            var charContainer = document.getElementById("characters");

            for (char of characters) {

                var charDiv = document.createElement('div');
                charDiv.setAttribute("class", "playercards")

                var charName = document.createElement('a')
                charName.setAttribute("class", "character-button")

                charName.innerHTML = char;

                charDiv.appendChild(charName);

                charContainer.appendChild(charDiv);
                
            }
        }   createChars();
    }
};

request.open('GET', 'https://raw.githubusercontent.com/joakimskoog/AnApiOfIceAndFire/master/data/characters.json');
request.send();

document.querySelectorAll