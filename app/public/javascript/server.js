//Action that happens upon clicking submit
$("#newCharacter").on("click", function() {
    
    //Create New Character On Submit

    let scores = [
        $("#question1").val(),
        $("#question2").val(),
        $("#question3").val(),
        $("#question4").val(),
        $("#question5").val(),
        $("#question6").val(),
        $("#question7").val(),
        $("#question8").val(),
        $("#question9").val(),
        $("#question10").val()
    ]

    let newCharacter =
        {
            "name": $("#name").val().trim(),
            "photo": $("#idURL").val().trim(),
            "scores": scores
        }
    
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

    //Push new character to Array

    characters.push(newCharacter);
    console.log("New Character Added!")
});

module.exports = characters;