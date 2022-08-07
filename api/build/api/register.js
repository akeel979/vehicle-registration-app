"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("../middlewares");
const _schemas_1 = require("../@schemas");
const controllers_1 = require("../controllers");
exports.default = (router) => {
    router.get("/register", controllers_1.getAllRegisters); // read
    router.post("/register", (0, middlewares_1.validate)(_schemas_1.registerSchema), controllers_1.addRegister); // create
    router.put("/register/:id", (0, middlewares_1.validate)(_schemas_1.registerSchema), controllers_1.updateRegister); // update
    router.delete("/register/:id", controllers_1.deleteRegister); // delete
};
//# sourceMappingURL=register.js.map