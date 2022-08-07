"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const logger_1 = tslib_1.__importDefault(require("./loaders/logger"));
const typedi_1 = require("typedi");
const express_1 = tslib_1.__importDefault(require("express"));
const express_2 = tslib_1.__importDefault(require("./loaders/express"));
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
const init = () => {
    // @ts-ignore
    const PORT = parseInt(process.env.PORT ? process.env.PORT : 4000, 10);
    const DB = process.env.DB ? process.env.DB : 'mongodb://localhost:27017/vehicles';
    (0, logger_1.default)();
    const app = (0, express_1.default)();
    (0, express_2.default)(app);
    const logger = typedi_1.Container.get("logger");
    (0, mongoose_1.connect)(DB)
        .then(() => {
        logger.info("✌ DB connected");
        logger.info("✌ Application started");
        logger.info(`${process.env.PORT}`);
        // @ts-ignore
        app.listen(PORT, () => {
            logger.info(`
                  ################################################
                  🛡️  Server listening on port: ${PORT} 🛡️
                  http://localhost:${PORT} 
                  ################################################
                `);
        });
    }).catch(e => {
        logger.error(e.message);
    });
};
init();
//# sourceMappingURL=app.js.map