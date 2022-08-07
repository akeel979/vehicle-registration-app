import {Request, Response} from 'express';
import {Register} from "../@models";
import {IRegister} from "../@types";
import {createSuccessResponse, createErrorResponse} from "../services/responses";
import {getPlateType} from "../utils";

// Create
export const addRegister = async (request: Request, response: Response) => {
    try {
        const done = await Register.create<IRegister>({...request.body});
        if (done) createSuccessResponse(response, 200, done);
    }catch (e: any) {
        createErrorResponse(request, response, 500, e.message)
    }
}

// Read
export const getAllRegisters = async (_: Request, response: Response) => {
    const done = await Register.find<IRegister>({});
    if(done) createSuccessResponse(response, 200, done);
}

// Update
export const updateRegister = async (request: Request, response: Response) => {
    try {
        const type = getPlateType(request.body.number)
        const done = await Register.findByIdAndUpdate<IRegister>(request.params['id'] , {...request.body, type})
        if (done) createSuccessResponse(response, 200, done);
    }catch (e: any) {
        createErrorResponse(request, response, 500, e.message)
    }
}

// Delete
export const deleteRegister = async (request: Request, response: Response) => {
    try {
        const done = await Register.findByIdAndDelete<IRegister>(request.params['id'])
        if(done) createSuccessResponse(response, 200, done);
    }catch (e:any) {
        createErrorResponse(request, response, 500, e.message)
    }
}


