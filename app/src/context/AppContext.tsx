import { createContext, useEffect, useState } from "react";
import {IAppContext, IRegister} from "../@types";
import { ReactNode } from 'react';
import {axios} from "../extensions";
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

type Props = {
    children: ReactNode;
};

export const useAppState = (): IAppContext  => {
    const [selectedRegister, setSelectedRegister] = useState<IRegister | null>(null);
    const [deleteAlertIsOpen, toggleDeleteAlert] = useState<boolean>(false);
    const [editFormOpen, toggleFormDialog] = useState<boolean>(false);
    const [registers, setRegister] = useState<Array<IRegister>>([]);
    // RXJS
    const [value$] = useState(() => new Subject<number>());

    useEffect(() => {
        // creating Rx subject that just listen for update
        const sub = value$.pipe(
            switchMap(async () => {
                const _registers = await axios.get('/register');
                return _registers ? _registers.data.data : []
            })
        ).subscribe((data) => {
            setRegister(data)
        });
        return () => sub.unsubscribe();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        value$.next(1)
    }, []);

    return {
        selectedRegister,
        setSelectedRegister,
        deleteAlertIsOpen,
        editFormOpen,
        registers,
        toggleDeleteAlert,
        toggleFormDialog,
        triggerReload: (v:number) => value$.next(v),
    }
}

export const AppContext = createContext<IAppContext>({
    selectedRegister: null,
    registers: [],
    setSelectedRegister: () => {},
    toggleDeleteAlert: () => {},
    toggleFormDialog: () => {},
    triggerReload: () => {},
    deleteAlertIsOpen: false,
    editFormOpen: false,
});

export const AppContextProvider = ({children}:Props) => {
    const value = useAppState();

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}