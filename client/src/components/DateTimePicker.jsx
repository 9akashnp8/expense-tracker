import { DatePicker, Space } from 'antd';

export default function DateTimePicker() {

    function handleChanage(value, dateString) {
        console.log('Selected Time', value)
        console.log('Formatted Selected Time', dateString)
    }

    return (
        <Space direction="vertical" size={12}>
            <DatePicker
                showTime={{format: 'HH:mm'}}
                format="DD-MM-YYYY HH:mm"
                onChange={handleChanage}
            />
        </Space>
    )
}