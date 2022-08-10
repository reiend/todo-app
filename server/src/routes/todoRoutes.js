"use strict";
exports.__esModule = true;
var express_1 = require("express");
var todoController_1 = require("../controllers/todoController");
/* eslint-disable */
var todoRouter = express_1["default"].Router();
/* eslint-enable */
// routes
todoRouter.get('/todos', todoController_1["default"].getTodos);
todoRouter.post('/todos', todoController_1["default"].createTodo);
todoRouter.get('/todos/:id', todoController_1["default"].getTodo);
todoRouter.put('/todos/:id', todoController_1["default"].updateTodo);
todoRouter["delete"]('/todos/:id', todoController_1["default"].deleteTodo);
exports["default"] = todoRouter;
