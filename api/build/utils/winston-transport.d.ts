import Transport, { TransportStreamOptions } from "winston-transport";
import { ChalkConfig, ConfigKeys, LogDataType } from "../@types";
export declare const getChalk: (level: ConfigKeys<"info" | "error" | "warn" | "debug">) => ChalkConfig;
export default class ChalkTransport extends Transport {
    options: TransportStreamOptions;
    constructor(options: TransportStreamOptions);
    log(logData: LogDataType, callback: () => void): void;
}
