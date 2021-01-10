var trendTypes = require("../models/project_types.json");

var java_dev = require("../models/java.json");
var c_dev = require("../models/c.json");
var js_dev = require("../models/node.json");

const DeviceDetector = require('node-device-detector');
const detector = new DeviceDetector;
const requestIP = require('request-ip');
const geoip = require('geoip-lite');

exports.drop = (req, res) => {
    res.status(200).json({trendTypes});
};

exports.employeeFilter = (req, res) => {
    var type = req.body.type;

    if(type == "node"){
        res.status(200).json({employees:js_dev});
    }
    else if(type == "java"){
        res.status(200).json({employees:java_dev});
    }
    else if(type == "c"){
        res.status(200).json({employees:c_dev});
    }
    else{
        res.status(400).send({message:"error"});
    }
};
  
exports.test = (req, res) => {
    var source = req.headers['user-agent']
    var clientIP = requestIP.getClientIp(req)
  
    var resultos = detector.parseOs(source)
    var resultclient = detector.parseClient(source)
    var resultdeviceType = detector.parseDeviceType(source, resultos, resultclient, {})
    // var results = Object.assign({ os: resultos.name }, { client: resultclient.name }, { device: resultdeviceType.type }, { ip: clientIP })
  
    // console.log(colors.blue(results));
    // console.log("fucking ip: " + clientIP);
  
    var ipaddress = clientIP.split("ffff:").pop();
    // console.log("after ip: " + ipaddress);
  
    var geo = geoip.lookup(ipaddress);
  
    console.log("OS :" + resultos.name);
    console.log("Browser : " + resultclient.name);
    console.log("Device : " + resultdeviceType.type);
    console.log("Country : " + geo.country);
    console.log("Ip address : " + ipaddress);
  
  
    res.status(200).send("message");
  };