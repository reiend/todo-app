"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoModel_1 = __importDefault(require("../models/todoModel"));
const Todo = {
    getTodos: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todos = yield todoModel_1.default.find();
            res.status(200).json({ todos });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    }),
    createTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.body.name) {
            res.status(400);
            throw new Error('please add name field');
        }
        try {
            const newTodo = yield todoModel_1.default.create(req.body);
            res.status(201).json({ todo: newTodo });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    }),
    getTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const foundTodo = yield todoModel_1.default.findOne({ _id: req.params.id });
            if (!foundTodo) {
                return res
                    .status(404)
                    .json({ message: `No Todo has an id of ${req.params.id}` });
            }
            res.status(200).json({ todo: foundTodo });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    }),
    updateTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.body.name) {
            res.status(400);
            throw new Error('please add name and completed field');
        }
        try {
            const updatedTodo = yield todoModel_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
            if (!updatedTodo) {
                return res
                    .status(404)
                    .json({ message: `No Todo has an id of ${req.params.id}` });
            }
            res.status(200).json({ todo: updatedTodo });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    }),
    deleteTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletedTodo = yield todoModel_1.default.findOneAndDelete({
                _id: req.params.id
            });
            if (!deletedTodo) {
                return res
                    .status(404)
                    .json({ message: `No Todo has an id of ${req.params.id}` });
            }
            res.status(200).json({ todo: deletedTodo });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    })
};
exports.default = Todo;
//# sourceMappingURL=todoController.js.map