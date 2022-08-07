import { SchemaOf } from "yup";
import { Request, Response, NextFunction } from "express";
import {IRegister} from "../@types";

export const validate = (schema: SchemaOf<IRegister>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validate({...req.body});
            return next();
        } catch (error: unknown) {
            return res.status(400).json(error);
        }
};
