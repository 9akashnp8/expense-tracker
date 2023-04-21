import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

export default function BasicDateTimePicker({ label, formik }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={formik.values.transaction_date_time}
                onChange={(date) => formik.setFieldValue('transaction_date_time', date)}
                renderInput={(params) => (
                    <TextField
                        id='transaction_date_time'
                        name='transaction_date_time'
                        {...params}
                    />
                )}
            />
        </LocalizationProvider>
    );
}