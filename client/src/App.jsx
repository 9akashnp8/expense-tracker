import { MailOutlined, AppstoreOutlined, SettingOutlined, PieChartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
    getItem('Home', '1', <PieChartOutlined />),
    getItem('Transactions', 'sub1', <MailOutlined />, [
        getItem('View All', '1'),
        getItem('Create', '2'),
        getItem('Insights', '3')
    ]),
    getItem('Settings', 'sub2', <AppstoreOutlined />, [
        getItem('Categories', '5'),
        getItem('Accounts', '6'),
        // getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ])
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2'];
const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        height: "100vh",
        width: 256
      }}
      items={items}
    />
  );
};
export default App;