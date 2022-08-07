import "reflect-metadata";
import { createLogger, format, transports } from "winston";
import { ChalkTransport } from "../utils/";
import { Container } from "typedi";

export default () => {
    const logger = createLogger({
        transports: [
            new transports.Console(
                new ChalkTransport({
                    format: format.combine(
                        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
                        format.errors({ stack: true }),
                        format.splat(),
                        format.json()
                    ),
                })
            ),
        ],
    });

    Container.set("logger", logger);
};
