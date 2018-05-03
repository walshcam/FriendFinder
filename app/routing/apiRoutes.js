//Has a GET route to "/api/friends" that will display a JSON of all friends
let characters = require('./../data/friends.js')

module.exports = function(app, path) {

    //Create a GET route to to create a json list of people.
    app.get("/api/friends", function(req, res) {
        res.json(characters);
    });

    // //Create a POST request to create new people
    // app.post("/api/friends", function(req, res) {
    //     res.sendFile(path.join(__dirname,"./../data/friends.js"));
    // });

}

//A POST route that allows new posts to be made from the survey

//EXPORT to surver.js