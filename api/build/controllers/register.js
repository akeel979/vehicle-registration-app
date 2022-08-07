"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRegister = exports.updateRegister = exports.getAllRegisters = exports.addRegister = void 0;
const _models_1 = require("../@models");
const responses_1 = require("../services/responses");
const utils_1 = require("../utils");
// Create
const addRegister = async (request, response) => {
    try {
        const done = await _models_1.Register.create(Object.assign({}, request.body));
        if (done)
            (0, responses_1.createSuccessResponse)(response, 200, done);
    }
    catch (e) {
        (0, responses_1.createErrorResponse)(request, response, 500, e.message);
    }
};
exports.addRegister = addRegister;
// Read
const getAllRegisters = async (_, response) => {
    const done = await _models_1.Register.find({});
    if (done)
        (0, responses_1.createSuccessResponse)(response, 200, done);
};
exports.getAllRegisters = getAllRegisters;
// Update
const updateRegister = async (request, response) => {
    try {
        const type = (0, utils_1.getPlateType)(request.body.number);
        const done = await _models_1.Register.findByIdAndUpdate(request.params['id'], Object.assign(Object.assign({}, request.body), { type }));
        if (done)
            (0, responses_1.createSuccessResponse)(response, 200, done);
    }
    catch (e) {
        (0, responses_1.createErrorResponse)(request, response, 500, e.message);
    }
};
exports.updateRegister = updateRegister;
// Delete
const deleteRegister = async (request, response) => {
    try {
        const done = await _models_1.Register.findByIdAndDelete(request.params['id']);
        if (done)
            (0, responses_1.createSuccessResponse)(response, 200, done);
    }
    catch (e) {
        (0, responses_1.createErrorResponse)(request, response, 500, e.message);
    }
};
exports.deleteRegister = deleteRegister;
//# sourceMappingURL=register.js.map