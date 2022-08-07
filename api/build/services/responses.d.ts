import { Request, Response } from 'express';
export declare const createSuccessResponse: (response: Response, code?: number, data?: {}) => Response<any, Record<string, any>>;
export declare const createFailResponse: (_: Request, response: Response, code?: number, message?: string, data?: {}) => void;
export declare const createAccessDeniedResponse: (_: Request, response: Response, __?: {}, message?: string, code?: number) => void;
export declare const createErrorResponse: (_: Request, response: Response, code?: number, message?: string) => void;
export declare const createResponse: (request: Request, response: Response, code: number, message: string, data: object | undefined) => void;
