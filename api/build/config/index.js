"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 80,
    chalkConfig: {
        info: {
            label: chalk_1.default.white.bold.bgGreen,
            value: chalk_1.default.green,
            type: "info",
        },
        error: {
            label: chalk_1.default.white.bold.bgRed,
            value: chalk_1.default.red,
            type: "error",
        },
        warn: {
            label: chalk_1.default.black.bold.bgYellow,
            value: chalk_1.default.yellow,
            type: "warn",
        },
        debug: {
            label: chalk_1.default.white.bold.bgBlue,
            value: chalk_1.default.blue,
            type: "debug",
        },
    },
    api: {
        prefix: "api",
    }
};
exports.default = () => {
    return config;
};
//# sourceMappingURL=index.js.map