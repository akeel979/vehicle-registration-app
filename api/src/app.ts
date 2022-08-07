import dotenv from 'dotenv';
import { Logger } from "winston";
import createLogger from "./loaders/logger";
import { Container } from "typedi";
import express from "express";
import loader from "./loaders/express";
import {connect} from 'mongoose';

dotenv.config();

const init = () => {
    // @ts-ignore
    const PORT = parseInt(process.env.PORT ? process.env.PORT : 4000, 10)
    const DB = process.env.DB ? process.env.DB : 'mongodb://localhost:27017/vehicles';
    createLogger();
    const app = express();
    loader(app);
    const logger: Logger = Container.get("logger");
    connect(DB)
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
    })
};

init();
