"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const register_1 = tslib_1.__importDefault(require("./register"));
exports.default = () => {
    const router = (0, express_1.Router)();
    (0, register_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map