//Has a GET route to "/api/friends" that will display a JSON of all friends
let characters = require('./../data/friends.js')

module.exports = function(app, path) {

    //Create a GET route to to create a json list of people.
    app.get("/api/friends", function(req, res) {
        res.json(characters);
    });

    //Create a POST request to create new people
    // Create New Characters - takes in JSON input
    app.post("/api/characters", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newcharacter = req.body;
    
        console.log(newcharacter);
    
        characters.push(newcharacter);
    
        res.json(newcharacter);

            //Compare Character Against other Characters & Activate Modal
    let characterComparisonArray = [];

    for (let i = 0; i < characters.length; i++) {
        let answer = 0;
        for (let j = 0; j < scores.length; j++) {
            answer += Math.abs(characters[i].scores[i] - scores[i]);
            console.log("Step In For Loop: " + i + ". Answer is: " + answer);
        }
        characterComparisonArray.push(answer)
    }

    //Find minimum number in Array
    let bestMatch;
    let bestMatchNumber = 999;

    for (let i = 0; i < characterComparisonArray.length; i++) {
        if (characterComparisonArray[i] < bestMatchNumber) {
            bestMatch = i;
            bestMatchNumber = characterComparisonArray[i];
        }
    }

    //Character that is best match for answers

    let characterBestMatch = characters[bestMatch];
    console.log(characterBestMatch);
    });

}

//A POST route that allows new posts to be made from the survey

//EXPORT to surver.js