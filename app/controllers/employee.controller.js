var data_set = require("../models/employee.json");

const pool = require("../config/pg");

exports.employeeFilter = (req, res) => {
    var token = req.body.token;
    var title = req.body.title;
    var industry = req.body.industry;
    var keywors = req.body.keywors;

    console.log(token + " ======== " + title + " ======== " + industry + " ======== " + keywors);


    if (token != undefined && title != undefined && industry != undefined && keywors != undefined) {

        // var industryArray = industry.split(',');
        // var keyworsArray = keywors.split(',');

        pool.query(
            NEWS_MODEL.ADD_CATEGORIES,
            [token, title, industry, keywors],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ message: "cannot provide this service at this time" });
                } else {
                    if (results.rowCount > 0) {
                        res.status(200).json({ Message: "Success" });
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


exports.scorecard = (req, res) => {
    res.status(200).json({data_set});
};
  