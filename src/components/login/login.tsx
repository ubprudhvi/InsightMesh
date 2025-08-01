import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import { TextBox } from '../common/commonComponents/textBox';
import { CommonButton } from '../common/commonComponents/commonButton/button';
import './login.less';

interface IFormData {
        username: string;
        password: string;
}

const login = (props: any) => {

        const { handleSubmit, control } = useForm<IFormData>({
                defaultValues: {
                        username: '',
                        password: ''
                }, mode: 'all'
        });
        type VariantType = 'outlined' | 'filled' | 'standard';
        interface ILoginInterface {
                name: string;
                label: string;
                placeholder: string;
                variant?: VariantType;
                type?: string;
                fullWidth?: boolean;
                margin?: 'none' | 'dense' | 'normal';
                required?: boolean;
                autoFocus?: boolean;
                inputProps?: object;
        }

        const loginInterfaceFields: ILoginInterface[] = [
                {
                        name: 'username',
                        label: 'Name',
                        placeholder: 'Enter username',
                        variant: 'outlined',
                        type: 'text',
                        fullWidth: true,
                        margin: 'normal',
                        required: true,
                        autoFocus: true,
                        inputProps: { 'aria-label': 'username' },
                },
                {
                        name: 'userEmail',
                        label: 'Email',
                        placeholder: 'Enter email',
                        variant: 'outlined',
                        type: 'email',
                        fullWidth: true,
                        margin: 'normal',
                        required: true,
                        autoFocus: true,
                        inputProps: { 'aria-label': 'Enter your email' },
                }
        ]

        const onSubmit = (data: any) => {
                console.log(data);
        }

        const renderLoginFields = (data: ILoginInterface[]) => {
                return data.map((field) => (
                        <TextBox

                                key={field.name}
                                name={field.name}
                                label={field.label}
                                placeholder={field.placeholder}
                                variant={field?.variant ? field.variant : 'outlined'}
                                fullWidth={field.fullWidth}
                                margin={field.margin}
                                type={field.type}
                                required={field.required}
                                control={control}
                                autoFocus={field.autoFocus}
                                inputProps={field.inputProps}
                        />

                ))
        };
        return (
                <>
                        <div style={{ height: '100vh', display: 'flex', color: 'red', justifyContent: 'center', alignItems: 'center' }}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                        {
                                                renderLoginFields(loginInterfaceFields)
                                        }
                                        <CommonButton
                                                ButtonType='primary'
                                                variant="contained"
                                                fullWidth
                                                htmlType="submit"
                                                children={'login'}
                                                onClick={handleSubmit(onSubmit)}
                                        />

                                </form>
                        </div>
                </>
        )
}

export default login;