import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {headerRoW} from '../../../utils/constants'

export default function TableHeaderRow(){
    return(
        <>
            <TableRow>
                { (Object.values(headerRoW) || []).map(s => <TableCell key={s}>{s}</TableCell>)}
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
            </TableRow>
        </>
    )
}