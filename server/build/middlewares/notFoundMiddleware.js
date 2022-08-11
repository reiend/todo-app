"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundHandler = (req, res) => res.status(404).json({ message: "Route does't exist" });
exports.default = notFoundHandler;
//# sourceMappingURL=notFoundMiddleware.js.map