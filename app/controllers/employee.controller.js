const fetch = require('node-fetch');

var data_set = require("../models/employee.json");

const pool = require("../config/pg");
const DBS = require('../database/dbs');

const baseURL = "https://vg2gtzbtlf.execute-api.us-east-1.amazonaws.com";

var mongoUtil = require('../config/mongoUtil');
// var db = mongoUtil.getDb();

// db.collection( 'users' ).find();

var fs = require('fs');

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
    res.status(200).json({ data_set });
};


exports.viewall = (req, res) => {
    pool.query(
        DBS.VIEW_ALL_EMP,
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


exports.getMarks = (req, res) => {
    pool.query(
        DBS.VIEW_MARK_EDU,
        [],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "cannot provide this service at this time" });
            } else {
                if (results.rowCount > 0) {
                    res.status(200).json({ Employees: results.rows[0] });
                } else {
                    res.status(400).json({ message: "Validation error" });
                }
            }
        }
    );
};

exports.updateMarks = (req, res) => {

    var phd = req.body.phd;
    var msc = req.body.msc;
    var bsc = req.body.bsc;
    var certi = req.body.certi;



    pool.query(
        DBS.UPDATE_MARK_EDU,
        [phd, msc, bsc, certi],
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


exports.createProject = (req, res) => {

    var title = req.body.title;
    var des = req.body.des;
    var dir = req.body.dir;


    var direcfull = 'public/' + dir;
    console.log(direcfull);

    if (!fs.existsSync(direcfull)) {
        fs.mkdirSync(direcfull);
    }


    pool.query(
        DBS.ADD_PROJECT,
        [title, des, dir],
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

exports.viewProjects = (req, res) => {
    pool.query(
        DBS.VIEW_PROJECTS,
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

exports.uploadProject = (req, res) => {

    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    var file = req.files.cv;
    var cv_name = file.name;
    var dir = req.body.dir;

    var dirname = 'public/' + dir

    file.mv(dirname + file.name, function (err) {

        if (err) {
            console.log(err);
            return res.status(500);
        }
        else {
            return res.status(200);
        }
    });
};

exports.addskill = (req, res) => {

    var skill = req.body.skill;
    var maxval = req.body.maxval;

    pool.query(
        DBS.ADD_SKILL,
        [skill, maxval],
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
exports.dellskill = (req, res) => {

    var skillid = req.body.skillid;

    pool.query(
        DBS.DELETE_SKILL,
        [skillid],
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
exports.viewskill = (req, res) => {

    pool.query(
        DBS.VIEW_SKILL,
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


//interview
//show
exports.showScoreCards = (req, res) => {

    var db = mongoUtil.getDb();

    db.collection('employees').find().toArray(function (err, docs) {
        if (err) {
            res.status(500);
        } else {
            res.status(200).json({ data: docs });
        }
    });

};

exports.oneScoreCard = (req, res) => {

    var eid = req.body.eid;

    var db = mongoUtil.getDb();

    db.collection('employees').find({ '_id': 1 }).toArray(function (err, docs) {
        if (err) {
            res.status(500);
        } else {
            res.status(200).json({ data: docs });
        }
    });
};

exports.initial = (req, res) => {

    var url = baseURL+"/Prod/iShort";
    var body = req.body;

    // console.log(url);
    // console.log(body);


    fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => res.status(200).send(json));

};

exports.algorithm = (req, res) => {
    var url1 = baseURL+"/Prod/algo1";
    var url2 = baseURL+"/Prod/algo2";
    var url3 = baseURL+"/Prod/algo3";

    var body = req.body;
    var algo = req.body.algorithm;

    // console.log(url);
    // console.log(body);

    if(algo==1){

        fetch(url1, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => res.status(200).send(json));
    }
    else if(algo==2){

        fetch(url2, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => res.status(200).send(json));
    }
    else if(algo==3){

        fetch(url3, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => res.status(200).send(json));
    }
    else{
        res.status(400);
    }
};


exports.jobposting = (req, res) => {
    var url = baseURL+"/Prod/jpops";

    var body = req.body;
    var operation = req.body.operation;

    // console.log(url);
    // console.log(body);

    if(operation=="view"){

        fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => res.status(200).send(json));
    }
    else if(operation=="delete"){

        fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => res.status(200).send(json));
    }
    else{
        res.status(400);
    }
};


