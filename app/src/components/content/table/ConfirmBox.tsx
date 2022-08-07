import {useCallback, useContext} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { axios } from "../../../extensions";
import {AppContext} from "../../../context/AppContext";

export default function AlertBox() {

    const appContext = useContext(AppContext);
    const handleClose = useCallback(() => {
        appContext.toggleDeleteAlert(false);
    }, [appContext]);

    const deleteEntry = useCallback(async () => {
        if(appContext.selectedRegister) {
            await axios.delete(`/register/${appContext.selectedRegister._id}`);
            appContext.triggerReload(2);
            appContext.toggleDeleteAlert(false);
        }else {
            appContext.toggleDeleteAlert(false);
        }
    }, [appContext]);

    return(
        <Dialog
            open={appContext.deleteAlertIsOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure want to delete
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={async () => {
                    await deleteEntry();
                }} autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}