const sgMail = require("@sendgrid/mail");

var culture = require("../models/culture.json");
var general = require("../models/general.json");
var workLife = require("../models/worklife.json");
var leadership = require("../models/leader.json");
var empdev = require("../models/empdev.json");
var results = require("../models/results.json");

// const SG_EMAIL_KEY = "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";
const SG_EMAIL_KEY = "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";

exports.startQ = (req, res) => {
    var qt = req.body.qtype;
    var gen = req.body.general;

    // if(gen){
    //     if(qt == "culture"){
    //         res.status(200).json({questions:culture,general_questions:general});
    //     }
    //     else if(qt == "work"){
    //         res.status(200).json({questions:workLife,general_questions:general});
    //     }
    //     else if(qt == "leader"){
    //         res.status(200).json({questions:leadership,general_questions:general});
    //     }
    //     else if(qt == "empdev"){
    //         res.status(200).json({questions:empdev,general_questions:general});
    //     }
    //     else{
    //         res.status(400);
    //     }
    // }
    // else{
    //     if(qt == "culture"){
    //         res.status(200).json({questions:culture});
    //     }
    //     else if(qt == "work"){
    //         res.status(200).json({questions:workLife});
    //     }
    //     else if(qt == "leader"){
    //         res.status(200).json({questions:leadership});
    //     }
    //     else if(qt == "empdev"){
    //         res.status(200).json({questions:empdev});
    //     }
    //     else{
    //         res.status(400);
    //     }
    // }
    res.status(200).json({questions:empdev});
};


exports.answers = (req, res) => {
    res.status(200).send({message:"success"});
};

exports.survey_camp = (req, res) => {

  var questions = req.body.questions;
  var ids = req.body.ids;

    sgMail.setApiKey(SG_EMAIL_KEY);
    var msg = {
      to: "hiushakumarasinghe@gmail.com",
      from: {
        email: 'hirusha@lucidex.lk',
        name: 'Phoenix HR'
      },
      template_id: 'd-3638d46b68454cee93a857d790ea895d',
      dynamic_template_data: {
        link: "http://3.23.104.187/survey/504ae7f576fc6572ff"
      }
    };
    const sendMessagePromise = sgMail.send(msg);

    return Promise.all([sendMessagePromise]).then(() => {
    return res.status(200).json({ Message: 'Please enter 4 digit code' });
  }).catch((err) => {
    return res.status(500).send({message: err});
  });

};

exports.survey_x= (req, res) => {

    sgMail.setApiKey(SG_EMAIL_KEY);
    const msg = {
        to: 'test@example.com',
        from: 'hirushakumarasinha@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
    const sendMessagePromise = sgMail.send(msg);

    return Promise.all([sendMessagePromise]).then(() => {
    return res.status(200).json({ Message: 'Please enter 4 digit code' });
  }).catch((err) => {
    return res.status(500).send({message: err});
  });

};


//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

//start campaign
//collect campaign
//stat campaign

//display data on pasindu



exports.results= (req, res) => {

  res.status(200).json({results});


};


//add key drriver
exports.addKeyDriver= (req, res) => {
  res.status(200).json({results});
};

//add question to key driver
//retrive questions
//start questionair
//send email
//