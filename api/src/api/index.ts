import { Router } from "express";
import register from "./register";

export default () => {
    const router = Router();
    register(router);
    return router;
};
