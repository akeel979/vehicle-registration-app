"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const api_1 = tslib_1.__importDefault(require("../api/"));
const method_override_1 = tslib_1.__importDefault(require("method-override"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
exports.default = (app) => {
    app.use((0, morgan_1.default)("combined"));
    app.get("/", (_, res) => res.json({ message: "Hello huston" }));
    app.get("/status", (_, res) => res.status(200).end());
    app.use((0, cors_1.default)({}));
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.json());
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use((0, express_1.json)());
    app.use("/api", (0, api_1.default)());
    app.enable("trust proxy");
    app.use((0, method_override_1.default)());
    /// error handlers
    app.use(function (_, res) {
        res.status(404).json({ message: "404" });
    });
};
//# sourceMappingURL=express.js.map