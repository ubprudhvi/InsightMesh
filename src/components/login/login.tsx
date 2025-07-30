import { Button, TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import React from 'react';

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


        const onSubmit = (data: any) => {
                console.log(data);
        }
        return (
                <>
                        <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                        <TextField
                                                label=


                                </form>
                        </div>
                </>
        )
}

export default login;