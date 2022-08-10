"use strict";
exports.__esModule = true;
var errorHandler = function (error, req, res, next) {
    var statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
    // call next middleware
    next();
};
exports["default"] = errorHandler;
