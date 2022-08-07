import { useFormContext, Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import {styled} from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";

interface IProps {
    name: string;
    type?: string;
}

const CssTextField = styled(TextField)({
    '& .MuiTextField-root': {
        marginTop: '15px'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
});

export default function RHFText({ name, label, type = 'text' , ...other }: IProps & TextFieldProps) {
    const { control } = useFormContext();

    return (
        <>
            <InputLabel shrink htmlFor="bootstrap-input">
                {label}
            </InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <CssTextField type={type} {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
                )}
            />
        </>
    );
}