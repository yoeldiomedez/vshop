import React, { useState } from 'react';
import { InputLabel, Select, Button, Grid, Typography } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';

import FormInput from './CustomTextField';
import { commerce } from '../../lib/commerce';

const AddressForm = () => {
    
    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput name='firstname' label='First name' required/>
                        <FormInput name='lastname' label='Last name' required/>
                        <FormInput name='address' label='Address' required/>
                        <FormInput name='emal' label='E-mail' required/>
                        <FormInput name='city' label='City' required/>
                        <FormInput name='zip' label='ZIP / Postal code' required/>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm