const pool = require("../config/pg");
const DBS = require('../database/dbs');


exports.login = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    console.log(email + " ======== " + password);


    if (email != undefined && password != undefined) {
        pool.query(
            DBS.LOGIN,
            [email, password],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ message: "cannot provide this service at this time" });
                } else {
                    if (results.rowCount > 0) {
                        res.status(200).json({ User:results.rows[0]});
                    } else {
                        res.status(400).json({ message: "Validation error" });
                    }
                }
            }
        );
    } else {
        res.status(400).json({ message: "Validation error" });
    }
};