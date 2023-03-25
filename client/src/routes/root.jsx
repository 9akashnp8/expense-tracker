import { Outlet, Link } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, PieChartOutlined } from '@ant-design/icons';
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

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
const Root = () => {
    const [openKeys, setOpenKeys] = useState(['sub2']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div
            style={{
                display: "flex",
                height: "100vh"
            }}
        >
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                    width: 256
                }}
                // items={items}
            >
                <Menu.Item key={"sub1"}>
                    <Link to={"/"}>Home</Link>
                </Menu.Item>
                <Menu.SubMenu key={"sub2"} title={"Transactions"}>
                    <Menu.Item key="1">
                        <Link to={"transactions"}>View All</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={"#"}>Create</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={"#"}>Insights</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"sub3"} title={"Settings"}>
                    <Menu.Item key="4">
                        <Link to={"#"}>Categories</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to={"#"}>Accounts</Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <div
                style={{flex: 1}}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Root;