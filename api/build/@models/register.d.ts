import { IRegister } from "../@types";
import { Schema, Model } from "mongoose";
export interface RegisterDocument extends IRegister {
}
export declare const RegisterSchema: Schema<IRegister, Model<IRegister, {}, RegisterDocument, {}, any>, {}, {}, any, {}, "type", IRegister>;
export declare const Register: Model<IRegister, {}, RegisterDocument, {}, any>;
