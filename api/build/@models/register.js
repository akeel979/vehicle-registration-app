"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.RegisterSchema = void 0;
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
exports.RegisterSchema = new mongoose_1.Schema({
    number: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    }
});
// pre save
exports.RegisterSchema.pre('save', async function (next) {
    this.type = (0, utils_1.getPlateType)(this.number); // Modern | Vintage | Old
    next();
});
exports.Register = (0, mongoose_1.model)('Register', exports.RegisterSchema);
//# sourceMappingURL=register.js.map