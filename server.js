const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const busboy = require("then-busboy");
const fileUpload = require('express-fileupload');


//route files
const employee_routes = require("./app/routes/employee");
const apr_routes = require("./app/routes/apprasial");
const trend_routes = require("./app/routes/trend");
const user_routes = require("./app/routes/user");

var mongoUtil = require( './app/config/mongoUtil' );

mongoUtil.connectToServer( function( err, client ) {
  if (err) console.log(err);
  // start the rest of your app here
} );


const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, './public')));
app.use(fileUpload());

app.get("/", (req, res) => res.send("Hello"));

//use routes
app.use("/api/emp", employee_routes);
app.use("/api/trend", trend_routes);
app.use("/api/apr", apr_routes);
app.use("/api/user", user_routes);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
