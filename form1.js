var express = require("express");
var fs = require('fs');
const PageTemplate = require('./PageTemplate.json');
const cssProperty = require('./property.json');
var file, pageSelectorFile, arr = [], pageSelectorGroup = [], k , columnName;
var parse = require('csv-parse');
const fileUpload = require('express-fileupload');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");
const Port = process.env.PORT || 8000;
var sampleFile;
var uploadPath;
const open = require('open');
const zip = require('express-zip');
const { CONNREFUSED } = require("dns");
//use the application off of express.
var app = express();
app.use(fileUpload());
//const Path = require('path')

//require(Path.join(__dirname, process.env.INDEX_PATH))

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index1.html");
});



