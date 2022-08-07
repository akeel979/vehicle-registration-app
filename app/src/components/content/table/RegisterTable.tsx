
import Table from '@mui/material/Table';
import { TableBody, Typography ,TableContainer, TableHead, Paper } from '@mui/material/';
import {RegisterTableProps, IRegister} from "../../../@types";
import Row from './Row'
import TableHeaderRow from "./TableHeaderRow";

export default function RegisterTable({registers, title}:RegisterTableProps) {
    return(
        <TableContainer component={Paper}>
            <Typography sx={{p:2}} variant={'h6'}>
                {title}
            </Typography>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableHeaderRow/>
                </TableHead>
                <TableBody>
                    {(registers||[]).map((e: IRegister & {_id?: string}) => {
                        return <Row key={e._id} row={e}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}