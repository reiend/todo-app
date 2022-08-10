"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongodb = function (url) { return mongoose_1["default"].connect(url); };
exports["default"] = mongodb;
