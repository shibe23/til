"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var json = axios_1["default"].get('http://localhost:3000/articles');
json.then().then(function (res) {
    console.log(res);
});
