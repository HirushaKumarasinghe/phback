const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


//route files
const employee_routes = require("./app/routes/employee");
const apr_routes = require("./app/routes/apprasial");
const trend_routes = require("./app/routes/trend");


const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello"));

//use routes
app.use("/api/emp", employee_routes);
app.use("/api/trend", trend_routes);
app.use("/api/apr", apr_routes);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
