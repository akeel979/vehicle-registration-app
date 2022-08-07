"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const yup_1 = require("yup");
const _types_1 = require("../@types");
exports.registerSchema = (0, yup_1.object)().shape({
    number: (0, yup_1.string)().required("Vehicle number required"),
    type: (0, yup_1.mixed)().oneOf(Object.values(_types_1.PlateType)).optional()
});
//# sourceMappingURL=index.js.map