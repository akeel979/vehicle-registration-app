import {
    IRegister,
} from '../@types';


// @ts-ignore
export const headerRoW: Readonly<IRegister> = {
    number: 'Vehicle Number',
    type: 'Plate Type',
} as const;