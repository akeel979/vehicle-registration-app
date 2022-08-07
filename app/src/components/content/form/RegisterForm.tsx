import {useContext, useEffect, useMemo, useCallback, ChangeEvent} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {RegisterFormProps, IRegister} from '../../../@types';
import {registerSchema} from '../../../@schemas'
import FormProvider from '../../../context/FromProvider'
import { RHFText} from "./index";
import {AppContext} from '../../../context/AppContext'
import {axios} from "../../../extensions";
import { useSnackbar } from 'notistack';
import {DialogTitle, Dialog, DialogContent, Button, Grid, DialogActions, Alert, AlertTitle, Stack} from "@mui/material";

export default function RegisterForm({currentRegister}:RegisterFormProps){
    const appContext = useContext(AppContext);
    const { enqueueSnackbar } = useSnackbar();
    const defaultValues = useMemo(
        () => currentRegister ? ({...currentRegister}) : {},
        [currentRegister, appContext]
    );
    const methods = useForm<IRegister>({
        resolver: yupResolver(registerSchema),
        defaultValues,
    });

    const {reset, handleSubmit, clearErrors, setValue, getValues} = methods;
    if(currentRegister){
        clearErrors()
    }
    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues, reset]);

    const onSubmit = async (data:IRegister) => {
        try {
            const resp = !currentRegister ? await axios.post('/register', {...data}) : await axios.put(`/register/${currentRegister._id}`, {...data})
            if (resp) {
                appContext.triggerReload(3);
                handleClose()
                enqueueSnackbar(`${data.number}: Added success`, {variant: 'success'});
            }
        } catch (e:any) {
            enqueueSnackbar(`Failed to add the ${data.number}. ${e.response.data.message} `, {variant: 'error'});
            handleClose()
        }
    }
    const handleClose = useCallback(() => {
        appContext.toggleFormDialog(false);
        appContext.setSelectedRegister(null)
    }, [appContext]);

    const addShriToNumber = useCallback(
        () => {
            const values = getValues()
            console.log(values)
            setValue('number', values.number ? `${values.number} ශ්‍රී` : ' ශ්‍රී')
        },
        [setValue, getValues],
    );


    return (
        <Dialog disableEscapeKeyDown open={appContext?.editFormOpen} onClose={handleClose}>
            <DialogTitle>Add your Vehicle number</DialogTitle>
            <DialogContent>

                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <RHFText label={'Number'} name={'number'} />
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    onClick={addShriToNumber}
                                    style={{marginTop: 22}} variant={'outlined'}>ශ්‍රී</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant={'contained'} type={'submit'}>Save</Button>
                        </Grid>
                    </Stack>

                </FormProvider>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}
