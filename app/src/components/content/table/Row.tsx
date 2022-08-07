import Box from '@mui/material/Box';
import {useContext, useState} from 'react'
import Table from '@mui/material/Table';
import { TableBody, Collapse, IconButton } from '@mui/material/';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Edit, Delete } from '@mui/icons-material/';
import {EntryRowProps} from "../../../@types";
import {AppContext} from "../../../context/AppContext";
import AlertBox from "./ConfirmBox";


export default function Row({row}:EntryRowProps){
    const [open, setOpen] = useState(false);
    const appContext = useContext(AppContext);
    // @ts-ignore
    return(
        <>
            <TableRow>
                <TableCell>
                    {row.number}
                </TableCell>
                <TableCell>
                    {row.type}
                </TableCell>
                <TableCell>
                    <IconButton onClick={() => {
                        appContext.setSelectedRegister(row);
                        appContext.toggleFormDialog(true)
                    }}>
                        <Edit/>
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton onClick={() => {
                        appContext.setSelectedRegister(row);
                        appContext.toggleDeleteAlert(true);
                    }}>
                        <Delete/>
                    </IconButton>
                </TableCell>
            </TableRow>
            <AlertBox/>
        </>
    )
}