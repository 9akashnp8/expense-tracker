import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

export default function BasicDateTimePicker({ label, formik }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={formik.values.transactionDate}
                onChange={(date) => formik.setFieldValue('transactionDate', date)}
                renderInput={(params) => (
                    <TextField
                        id='transactionDate'
                        name='transactionDate'
                        {...params}
                    />
                )}
            />
        </LocalizationProvider>
    );
}