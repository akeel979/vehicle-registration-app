import {IRegister} from "../@types";
import { Schema, model, Model} from "mongoose";
import {getPlateType} from "../utils";

export interface RegisterDocument extends IRegister {
}

export const RegisterSchema = new Schema<IRegister, Model<IRegister, {},  RegisterDocument>>({
    number: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    }
});

// pre save
RegisterSchema.pre('save', async function(next) {
    this.type = getPlateType(this.number); // Modern | Vintage | Old
    next()
})

export const Register = model<IRegister, Model<IRegister, {},  RegisterDocument>>('Register', RegisterSchema)