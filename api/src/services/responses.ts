import { Request, Response } from 'express'; // eslint-disable-line import/no-unresolved

//import config from '../config';

export const createSuccessResponse = (
    response: Response,
    code = 200,
    data = {},
) =>
    response.status(code).json({
        status: 'success',
        data,
    });

export const createFailResponse = (
    _: Request,
    response: Response,
    code = 400,
    message = 'Bad Request',
    data = {},
    //error = {},
    //returnErrorBody: boolean = false,
) => {
    //request.log.error(message, { err: error });

    response.status(code).json({
        status: 'fail',
        message,
        data,
        //...(config.mode === 'development' || returnErrorBody ? { error } : {}),
    });
};

export const createAccessDeniedResponse = (
    _: Request,
    response: Response,
    __ = {},
    message = 'Do Not Have Permission',
    code = 403,
    //returnErrorBody: boolean = false,
) => {
    //request.log.error(message, { err: error });

    response.status(code).json({
        status: 'fail',
        message,
        //...(config.mode === 'development' || returnErrorBody ? { error } : {}),
    });
};

export const createErrorResponse = (
    _: Request,
    response: Response,
    code = 500,
    message = 'Internal Server Error',
    //error = {},
    //returnErrorBody: boolean = false,
) => {
    //request.log.error(message, { err: error });

    response.status(code).json({
        status: 'error',
        message,
        //...(config.mode === 'development' || returnErrorBody ? { error } : {}),
    });
};

export const createResponse = (
    request: Request,
    response: Response,
    code: number,
    message: string,
    data: object | undefined,
    //error: object = {},
    //returnErrorBody: boolean = false,
) => {
    if (code >= 200 && code < 300) {
        createSuccessResponse(response, code, data);
    } else if (code === 403) {
        createAccessDeniedResponse(request, response);
    } else if (code >= 400 && code < 500) {
        createFailResponse(
            request,
            response,
            code,
            message,
            data,
            //error,
            //returnErrorBody,
        );
    } else {
        createErrorResponse(
            request,
            response,
            code,
            message,
            //data || error,
            //returnErrorBody,
        );
    }
};
