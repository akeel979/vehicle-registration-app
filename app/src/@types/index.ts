type Prepend<T, U extends any[]> = [T, ...U];

type Keys_<T extends Record<string, any>, U extends PropertyKey[]> = {
    [P in keyof T]: {} extends Omit<T, P>
        ? [P]
        : Prepend<P, Keys_<Omit<T, P>, U>>;
}[keyof T];

export type Keys<T extends Record<string, any>> = Keys_<T, []>;

export enum PlateType {
    Vintage = 'Vintage',
    Old = 'Old',
    Modern = 'Modern'
}

export interface IRegister {
    number: string;
    type?: PlateType;
}

export interface IAppContext {
    selectedRegister: IRegister & {_id?: string} | null;
    deleteAlertIsOpen: boolean;
    editFormOpen: boolean;
    registers: Array<IRegister>;
    setSelectedRegister: (register: IRegister | null) => void;
    toggleDeleteAlert:(open: boolean) => void;
    toggleFormDialog: (open: boolean) => void;
    triggerReload: (v: number) => void;
}

// component props
export type EntryProps = {
    currentRegister: IRegister & {_id: string} | null;
}

export type RegisterFormProps = {
    currentRegister: IRegister & {_id ?: string} | null;
}

export type RegisterTableProps = {
    registers: Array<IRegister>;
    title: string;
}

export type EntryRowProps = {
    row: IRegister;
}

export type AlertBoxProps = {
    open: boolean;
    toggleOpen: (open: boolean) => void
    selectedEntry: IRegister | null;
}
