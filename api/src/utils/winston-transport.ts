import Transport, {TransportStreamOptions} from "winston-transport";
import getConfig from "../config/";
import { ChalkConfig, ConfigKeys, LogDataType } from "../@types";

const config = getConfig();

export const getChalk = (
    level: ConfigKeys<"info" | "error" | "warn" | "debug">
): ChalkConfig => {
    const { chalkConfig } = config;
    return chalkConfig[level];
};

export default class ChalkTransport extends Transport {
    options: TransportStreamOptions;

    constructor(options: TransportStreamOptions) {
        super(options);
        this.options = options;
    }

    log(logData: LogDataType, callback: () => void) {
        const { level, message, timestamp } = logData;
        const chalk = getChalk(level);
        if (chalk) {
            console.log(
                chalk.label(" TYPE: "),
                chalk.value(level.toUpperCase())
            );
            console.log(chalk.label(" TIME: "), chalk.value(timestamp));
            console.log(chalk.label(" MESSAGE: "), chalk.value(message));
        }
        callback();
    }
}
