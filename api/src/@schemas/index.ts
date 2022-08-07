import { SchemaOf, string, object, mixed} from "yup";
import {
    IRegister,
    PlateType
} from "../@types";

export const registerSchema: SchemaOf<IRegister> = object().shape({
    number: string().required("Vehicle number required"),
    type: mixed<PlateType>().oneOf(Object.values(PlateType)).optional()
});