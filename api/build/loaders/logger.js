"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const winston_1 = require("winston");
const utils_1 = require("../utils/");
const typedi_1 = require("typedi");
exports.default = () => {
    const logger = (0, winston_1.createLogger)({
        transports: [
            new winston_1.transports.Console(new utils_1.ChalkTransport({
                format: winston_1.format.combine(winston_1.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.json()),
            })),
        ],
    });
    typedi_1.Container.set("logger", logger);
};
//# sourceMappingURL=logger.js.map