import {Chalk} from "chalk";

export type ConfigKeys<T> = T;

export type LogDataType = {
    level: ConfigKeys<"info" | "error" | "warn" | "debug">;
    message: string;
    timestamp: string;
}

export type ChalkConfig = {
    label: Chalk;
    value: Chalk;
    type: string;
};

export type Config = {
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

export enum PlateType {
    Vintage = 'Vintage',
    Old = 'Old',
    Modern = 'Modern',
    Invalid = 'Invalid'
}

export interface IRegister {
    number: string;
    type?: PlateType;
}