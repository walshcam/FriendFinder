module.exports = function(app, path) {

    //Create a GET route to /survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname,"./../public/survey.html"));
    });

    //Have a default route that leads to home.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname,"./../public/home.html"));
    });

}