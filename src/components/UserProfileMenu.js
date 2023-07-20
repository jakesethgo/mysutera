import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, EditOutlined } from '@ant-design/icons';

const UserProfileMenu = () => {
  const handleMenuClick = (e) => {
    if (e.key === 'editProfile') {
      // Handle edit profile action
    } else if (e.key === 'logout') {
      // Handle log out action
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="editProfile" icon={<EditOutlined />}>
        Edit Profile
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <Avatar icon={<UserOutlined />} />
    </Dropdown>
  );
};

export default UserProfileMenu;