import {MODERN_REGEX, OLD_REGEX, VINTAGE_REGEX} from './index'
import {PlateType} from "../@types";

export const isVintage = (input: string): boolean => !!input.match(VINTAGE_REGEX);
export const isOld = (input: string): boolean => !!input.match(OLD_REGEX);
export const isModern = (input: string): boolean => !!input.match(MODERN_REGEX);

export const getPlateType = (number: string):PlateType => {
    if(isVintage(number)) return PlateType.Vintage;
    if(isOld(number)) return PlateType.Old;
    if(isModern(number)) return PlateType.Modern;
    return PlateType.Invalid;
}