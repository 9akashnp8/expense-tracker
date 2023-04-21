import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function BasicSelect({ id, label, data, value, handleChange }) {
    console.log(data)
    return (
        <TextField
            select
            id={id}
            name={id}
            label={label}
            value={value}
            onChange={handleChange}
        >
            {data ? data.map((item) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>): null}
        </TextField>
    );
}