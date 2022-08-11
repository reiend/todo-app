"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = __importDefault(require("../controllers/todoController"));
const todoRouter = express_1.default.Router();
todoRouter.get('/todos', todoController_1.default.getTodos);
todoRouter.post('/todos', todoController_1.default.createTodo);
todoRouter.get('/todos/:id', todoController_1.default.getTodo);
todoRouter.patch('/todos/:id', todoController_1.default.updateTodo);
todoRouter.delete('/todos/:id', todoController_1.default.deleteTodo);
exports.default = todoRouter;
//# sourceMappingURL=todoRoutes.js.map