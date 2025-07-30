import { ICommonTextFieldProps } from '@/utils/commonInterface';
import { TextField } from '@mui/material'



export const TextBox = (props: ICommonTextFieldProps) => {

    const { name, label,placeholder, variant = 'outlined', fullWidth = true, margin = 'normal' } = props;
    return (
        <TextField
            name={name}
            placeholder={placeholder}
            label={label}
            variant={variant}
            fullWidth
            margin={margin}
        />
    );
}