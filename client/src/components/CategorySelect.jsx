import { Select } from 'antd';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export default function CategorySelect({ data }) {

    const nestedData = data.reduce((acc, cur) => {
        const groupName = cur.group ? cur.group.name : cur.type.name;
        const existingGroup = acc.find(group => group.label === groupName);

        if (existingGroup) {
            existingGroup.options.push({ label: cur.name, value: cur.name.toLowerCase() });
        } else {
            acc.push({
                label: groupName,
                options: [{ label: cur.name, value: cur.name.toLowerCase() }]
            });
        }

        return acc;
    }, []);

    return (
        <Select
            defaultValue="Select Category"
            style={{
                width: 200,
            }}
            onChange={handleChange}
            options={nestedData}
        />
    )
}