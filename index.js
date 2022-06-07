let express    = require('express'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser');

// Import routes
let apiRoutes = require("./routes/api");

// Initializing the app
let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect("mongodb://localhost:27017/restful", {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Define server port
const PORT = process.env.port || 3000;

// Send message for default route
app.get('/', function(req, res){
    res.send("Express is running successfully!");
});
// Use Api routes in the App
app.use('/api', apiRoutes);

// Listen to specified port(always keep this at bottom of the file)
app.listen(PORT, function () {
    console.log("Server has started on port " + PORT);
});