import { Config } from "../@types";
import chalk from "chalk";

const config: Config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 80,
    chalkConfig: {
        info: {
            label: chalk.white.bold.bgGreen,
            value: chalk.green,
            type: "info",
        },
        error: {
            label: chalk.white.bold.bgRed,
            value: chalk.red,
            type: "error",
        },
        warn: {
            label: chalk.black.bold.bgYellow,
            value: chalk.yellow,
            type: "warn",
        },
        debug: {
            label: chalk.white.bold.bgBlue,
            value: chalk.blue,
            type: "debug",
        },
    },
    api: {
        prefix: "api",
    }
};

export default () => {
    return config;
};
