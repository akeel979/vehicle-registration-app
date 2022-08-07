import { useState, useEffect, useContext, useCallback} from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material/';
import {axios} from '../../extensions';
import {RegisterForm} from "./form";
import {Table} from './table'
import {AppContext} from "../../context/AppContext";

export default function Entry(){
    const appContext = useContext(AppContext);

    const handleClickOpen = useCallback(() => {
        appContext.toggleFormDialog(true)
    }, [appContext]);

    return(
        <Grid container style={{marginTop: 10}} spacing={3}>
            <Grid item xs={12}>
                <Table
                    registers={appContext.registers}
                    title={'Vehicles'}
                />
                <br/>
                <Button onClick={handleClickOpen}>Add New Register</Button>
                <RegisterForm currentRegister={appContext.selectedRegister}/>
            </Grid>
        </Grid>
    )
}