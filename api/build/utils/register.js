"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlateType = exports.isModern = exports.isOld = exports.isVintage = void 0;
const index_1 = require("./index");
const _types_1 = require("../@types");
const isVintage = (input) => !!input.match(index_1.VINTAGE_REGEX);
exports.isVintage = isVintage;
const isOld = (input) => !!input.match(index_1.OLD_REGEX);
exports.isOld = isOld;
const isModern = (input) => !!input.match(index_1.MODERN_REGEX);
exports.isModern = isModern;
const getPlateType = (number) => {
    if ((0, exports.isVintage)(number))
        return _types_1.PlateType.Vintage;
    if ((0, exports.isOld)(number))
        return _types_1.PlateType.Old;
    if ((0, exports.isModern)(number))
        return _types_1.PlateType.Modern;
    return _types_1.PlateType.Vintage;
};
exports.getPlateType = getPlateType;
//# sourceMappingURL=register.js.map