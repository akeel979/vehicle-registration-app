"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChalk = void 0;
const tslib_1 = require("tslib");
const winston_transport_1 = tslib_1.__importDefault(require("winston-transport"));
const config_1 = tslib_1.__importDefault(require("../config/"));
const config = (0, config_1.default)();
const getChalk = (level) => {
    const { chalkConfig } = config;
    return chalkConfig[level];
};
exports.getChalk = getChalk;
class ChalkTransport extends winston_transport_1.default {
    constructor(options) {
        super(options);
        this.options = options;
    }
    log(logData, callback) {
        const { level, message, timestamp } = logData;
        const chalk = (0, exports.getChalk)(level);
        if (chalk) {
            console.log(chalk.label(" TYPE: "), chalk.value(level.toUpperCase()));
            console.log(chalk.label(" TIME: "), chalk.value(timestamp));
            console.log(chalk.label(" MESSAGE: "), chalk.value(message));
        }
        callback();
    }
}
exports.default = ChalkTransport;
//# sourceMappingURL=winston-transport.js.map