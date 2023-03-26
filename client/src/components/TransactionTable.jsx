import { Space, Table } from 'antd';
const columns = [
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Item',
        dataIndex: 'item',
        key: 'item',
    },
    {
        title: 'Transaction Date',
        dataIndex: 'transaction_date_time',
        key: 'transaction_date_time',
        render: (_, data) => (
            <>{new Date(_).toDateString()}</>
        )
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Labels',
        dataIndex: 'label',
        key: 'label',
    },
    // {
    //     title: 'Labels',
    //     key: 'labels',
    //     dataIndex: 'labels',
    //     render: (_, { labels }) => (
    //         <>
    //             {labels.map((label) => {
    //                 let color = label.length > 5 ? 'geekblue' : 'green';
    //                 if (label === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={label}>
    //                         {label.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];
// const TransactionTable = ({transactions}) => <Table columns={columns} dataSource={transactions} />;
// export default TransactionTable;

export default function TransactionTable({transactions}) {
    return (
        <Table
            style={{padding: "3em"}}
            columns={columns}
            dataSource={transactions}
        />
    )
}