import { ICommonTextFieldProps } from '@/utils/commonInterface';
import { TextField, TextFieldProps } from '@mui/material'
import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
type ITextField = TextFieldProps & {
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onError?: (event: React.FocusEvent<HTMLInputElement>) => void;
    name: string;
    control: any;
};


export const TextBox: FC<ITextField> = (props) => {

    const { name, label,control, defaultValue, ...rest } = props
// const { formState: { errors } } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue || ''}
            render={({ field, fieldState }) => (
                <TextField
                    {...field}
                    {...rest}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message || rest.helperText}
                />
            )}
        />
    );
}