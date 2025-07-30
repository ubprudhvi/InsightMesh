export interface ICommonTextFieldProps {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    InputLabelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
    variant?: 'filled' | 'outlined' | 'standard';
    margin?: 'none' | 'dense' | 'normal';

}