"use strict";

var _App = require("./App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
var app = new _App2.default();

app.listen(port, function () {
    console.log("The server has been setted up succesfully and listening on port " + port);
});