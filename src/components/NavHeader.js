import React from 'react';
import { Layout, theme, Avatar } from 'antd';

const { Header } = Layout;

const NavHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // Sample user data for profile picture and name (replace with actual user data)
  const user = {
    name: 'John Doe',
    profilePicture: 'URL_TO_USER_PROFILE_PICTURE',
  };

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Your other content for the left side of the header */}
      <div>
        {/* Breadcrumbs or any other content for the left side */}
      </div>

      {/* Right side content with user name and avatar */}
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
        <span style={{ color: '#000', marginRight: '10px' }}>{user.name}</span>
        <Avatar shape="square" size='large' style={{marginRight: '15px'}} src={user.profilePicture} alt="User Profile" />
      </div>
    </Header>
  );
};

export default NavHeader;
