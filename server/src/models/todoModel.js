"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var TodoSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name is required'],
        maxLength: [128, "name can't be more than 128 characters"]
    },
    completed: {
        type: Boolean,
        "default": false
    }
});
exports["default"] = mongoose_1["default"].model('Todo', TodoSchema);
