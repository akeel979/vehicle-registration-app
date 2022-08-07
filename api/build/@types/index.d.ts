import { Chalk } from "chalk";
export declare type ConfigKeys<T> = T;
export declare type LogDataType = {
    level: ConfigKeys<"info" | "error" | "warn" | "debug">;
    message: string;
    timestamp: string;
};
export declare type ChalkConfig = {
    label: Chalk;
    value: Chalk;
    type: string;
};
export declare type Config = {
    port: number;
    api: {
        prefix: string;
    };
    chalkConfig: {
        info: ChalkConfig;
        error: ChalkConfig;
        warn: ChalkConfig;
        debug: ChalkConfig;
    };
};
export declare enum PlateType {
    Vintage = "Vintage",
    Old = "Old",
    Modern = "Modern"
}
export interface IRegister {
    number: string;
    type?: PlateType;
}
