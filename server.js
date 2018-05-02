// Dependencies
// =============================================================
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app/public')));
// app.use(express.static(path.join(__dirname, 'app/routing')));

// Routes to Routers
// =============================================================

require ('./app/routing/htmlRoutes.js')(app, path);



// Routes user to first setup page
// =============================================================

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname,"app/public/home.html"));
// });

// Begin Listening to Server
// =============================================================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
