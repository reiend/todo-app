"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TodoSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name is required'],
        maxLength: [128, "name can't be more than 128 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});
exports.default = mongoose_1.default.model('Todo', TodoSchema);
//# sourceMappingURL=todoModel.js.map