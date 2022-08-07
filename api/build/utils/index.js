"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlateType = exports.MODERN_REGEX = exports.OLD_REGEX = exports.VINTAGE_REGEX = exports.ChalkTransport = void 0;
var winston_transport_1 = require("./winston-transport");
Object.defineProperty(exports, "ChalkTransport", { enumerable: true, get: function () { return __importDefault(winston_transport_1).default; } });
var constants_1 = require("./constants");
Object.defineProperty(exports, "VINTAGE_REGEX", { enumerable: true, get: function () { return constants_1.VINTAGE_REGEX; } });
Object.defineProperty(exports, "OLD_REGEX", { enumerable: true, get: function () { return constants_1.OLD_REGEX; } });
Object.defineProperty(exports, "MODERN_REGEX", { enumerable: true, get: function () { return constants_1.MODERN_REGEX; } });
var register_1 = require("./register");
Object.defineProperty(exports, "getPlateType", { enumerable: true, get: function () { return register_1.getPlateType; } });
//# sourceMappingURL=index.js.map