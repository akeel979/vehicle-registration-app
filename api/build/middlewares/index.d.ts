import { SchemaOf } from "yup";
import { Request, Response, NextFunction } from "express";
import { IRegister } from "../@types";
export declare const validate: (schema: SchemaOf<IRegister>) => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
