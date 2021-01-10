const pool = require("../config/pg");
const DBS = require('../database/dbs');



exports.addKeyDriver = (req, res) => {

    var key = req.body.key;


    pool.query(
        DBS.ADD_KEYDRIVER,
        [key],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "cannot provide this service at this time" });
            } else {
                if (results.rowCount > 0) {
                    res.status(200).json({ message: "done" });
                } else {
                    res.status(400).json({ message: "Validation error" });
                }
            }
        }
    );
};

exports.viewKeyDriver = (req, res) => {
    pool.query(
        DBS.VIEW_KEYDRIVER,
        [],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "cannot provide this service at this time" });
            } else {
                if (results.rowCount > 0) {
                    res.status(200).json({ Employees: results.rows });
                } else {
                    res.status(400).json({ message: "Validation error" });
                }
            }
        }
    );
};



exports.addQuestion = (req, res) => {

    var type = req.body.type;
    var question = req.body.question;
    var keyid = req.body.keyid;

    if(type == 'text'){
        pool.query(
            DBS.ADD_TEXT_Q,
            [keyid,question],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ message: "cannot provide this service at this time" });
                } else {
                    if (results.rowCount > 0) {
                        res.status(200).json({ message: "done" });
                    } else {
                        res.status(400).json({ message: "Validation error" });
                    }
                }
            }
        );
    }
    else if(type == 'radio'){
        pool.query(
            DBS.ADD_RADIO_Q,
            [keyid,question],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ message: "cannot provide this service at this time" });
                } else {
                    if (results.rowCount > 0) {
                        res.status(200).json({ message: "done" });
                    } else {
                        res.status(400).json({ message: "Validation error" });
                    }
                }
            }
        );
    }
    else{
        res.status(400).json({ message: "Validation error" });
    }

};

exports.viewQuestion = (req, res) => {
    pool.query(
        DBS.VIEW_Q,
        [],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "cannot provide this service at this time" });
            } else {
                if (results.rowCount > 0) {
                    res.status(200).json({ Employees: results.rows });
                } else {
                    res.status(400).json({ message: "Validation error" });
                }
            }
        }
    );
};

// start questionair
// collect
//  summary