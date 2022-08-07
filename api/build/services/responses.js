"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = exports.createErrorResponse = exports.createAccessDeniedResponse = exports.createFailResponse = exports.createSuccessResponse = void 0;
//import config from '../config';
const createSuccessResponse = (response, code = 200, data = {}) => response.status(code).json({
    status: 'success',
    data,
});
exports.createSuccessResponse = createSuccessResponse;
const createFailResponse = (_, response, code = 400, message = 'Bad Request', data = {}) => {
    //request.log.error(message, { err: error });
    response.status(code).json({
        status: 'fail',
        message,
        data,
        //...(config.mode === 'development' || returnErrorBody ? { error } : {}),
    });
};
exports.createFailResponse = createFailResponse;
const createAccessDeniedResponse = (_, response, __ = {}, message = 'Do Not Have Permission', code = 403) => {
    //request.log.error(message, { err: error });
    response.status(code).json({
        status: 'fail',
        message,
        //...(config.mode === 'development' || returnErrorBody ? { error } : {}),
    });
};
exports.createAccessDeniedResponse = createAccessDeniedResponse;
const createErrorResponse = (_, response, code = 500, message = 'Internal Server Error') => {
    //request.log.error(message, { err: error });
    response.status(code).json({
        status: 'error',
        message,
        //...(config.mode === 'development' || returnErrorBody ? { error } : {}),
    });
};
exports.createErrorResponse = createErrorResponse;
const createResponse = (request, response, code, message, data) => {
    if (code >= 200 && code < 300) {
        (0, exports.createSuccessResponse)(response, code, data);
    }
    else if (code === 403) {
        (0, exports.createAccessDeniedResponse)(request, response);
    }
    else if (code >= 400 && code < 500) {
        (0, exports.createFailResponse)(request, response, code, message, data);
    }
    else {
        (0, exports.createErrorResponse)(request, response, code, message);
    }
};
exports.createResponse = createResponse;
//# sourceMappingURL=responses.js.map