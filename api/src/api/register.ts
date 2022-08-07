import { Router } from "express";
import { validate } from "../middlewares";
import { registerSchema } from "../@schemas";
import {getAllRegisters, updateRegister, deleteRegister, addRegister} from "../controllers";


export default (router: Router) => {
    router.get("/register", getAllRegisters); // read

    router.post("/register", validate(registerSchema), addRegister); // create

    router.put("/register/:id", validate(registerSchema), updateRegister); // update

    router.delete("/register/:id", deleteRegister); // delete
};


