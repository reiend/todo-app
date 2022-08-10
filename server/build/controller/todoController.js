'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const todoModel_1 = __importDefault(require('../models/todoModel'));
const express_async_handler_1 = __importDefault(
  require('express-async-handler')
);
const list = (0, express_async_handler_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todoModel_1.default.find();
    res.status(200).json({ todos });
  })
);
const create = (0, express_async_handler_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.name) {
      res.status(400);
      throw new Error('Please add a name field');
    }
    const todo = yield todoModel_1.default.create({ name: req.body.name });
    res.status(200).json(todo);
  })
);
const update = (0, express_async_handler_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todoModel_1.default.findById(req.params.id);
    if (!todo) {
      res.status(400);
      throw new Error('Todo not found');
    }
    const updatedTodo = yield todoModel_1.default.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTodo);
  })
);
const remove = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todoModel_1.default.findById(req.params.id);
    if (!todo) {
      res.status(400);
      throw new Error('Todo not Found');
    }
    const deletedTodo = yield todoModel_1.default.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedTodo);
  });
const Todo = {
  list,
  create,
  update,
  remove
};
exports.default = Todo;
//# sourceMappingURL=todoController.js.map
