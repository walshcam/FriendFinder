//Has a GET route to "/api/friends" that will display a JSON of all friends

module.exports = function(app, path) {

    //Create a GET route to /survey
    app.get("/api/friends", function(req, res) {
        res.sendFile(path.join(__dirname,"./../data/friends.js"));
    });

    //Have a default route that leads to home.html
    app.post("/api/friends", function(req, res) {
        res.sendFile(path.join(__dirname,"./../data/friends.js"));
    });

}

//A POST route that allows new posts to be made from the survey

//EXPORT to surver.js