import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as BaseDatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
    label: string
}

export default function DatePicker({ label }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <BaseDatePicker label={label} sx={{ width: "100%" }} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
