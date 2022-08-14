import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import FormInfor from '../components/Form/FormInfor';
import Order from '../components/Form/Order';
import ScrollToTop from '../components/Wrapper';

export default function Form(){
    
    return<div className='form'>
        <ScrollToTop />
        <FormInfor />
        <Order />
    </div>
}