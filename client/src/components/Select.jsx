import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect({ label, id, value, handleChange}) {
    return (
        <div>
            <FormControl sx={{ width: '100%', minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">{label}</InputLabel>
                <Select
                    defaultValue=""
                    id={id}
                    name={id}
                    label="Grouping"
                    onChange={handleChange}
                    value={value}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}