import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
    RiMenuFill,
    RiMenuFoldLine,
    RiDashboardFill,
    RiCheckboxMultipleFill,
    RiQuillPenFill,
    RiFolderOpenFill,
    RiMoneyDollarCircleFill,
    RiFileList3Fill,

} from 'react-icons/ri'
import { Layout, Menu, Button, } from 'antd';
import {Link, Outlet} from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <Sider trigger={null} collapsible collapsed={collapsed} style={{minHeight:'100vh'}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          height: '64px',
          paddingLeft: collapsed ? 0 : 24,
          transition: 'all 0.3s',
          color: '#FFFFFF'
        }}
      >
        {!collapsed && <div className="demo-logo-vertical">Canggih</div>}
        <Button
          type="text"
          icon={collapsed ? <RiMenuFill size={20} /> : <RiMenuFoldLine size={20} />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            color: '#FFFFFF',
          }}
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1" icon={<RiDashboardFill />}>
        <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<RiCheckboxMultipleFill />}>
        <Link to="/confirmlist">Confirm List</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<RiQuillPenFill />}>
        <Link to="/mywork">My Work</Link>
        </Menu.Item>
        <SubMenu key="4" icon={<RiFolderOpenFill />} title="Projects">
          <Menu.Item key="4-1">Bulk</Menu.Item>
          <Menu.Item key="4-2">Individual</Menu.Item>
        </SubMenu>
        <Menu.Item key="5" icon={<RiMoneyDollarCircleFill />}>
          Normal Sales
        </Menu.Item>
        <Menu.Item key="6" icon={<RiFileList3Fill />}>
          Product List
        </Menu.Item>
      </Menu>
      </Sider>
  );
};
export default Sidebar;