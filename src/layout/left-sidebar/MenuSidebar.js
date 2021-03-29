import React from 'react';
import MyNavLink from 'layout/left-sidebar/MyNavLink';
//material-ui icon
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function MenuSidebar() {
  return (
    <div>
      <MyNavLink icon={<DynamicFeedIcon />} path="/">
        Todo
      </MyNavLink>
      <br />
      <MyNavLink icon={<AccountBoxIcon />} path="/userProfile">
        Account
      </MyNavLink>
      <br />
      <MyNavLink icon={<ExitToAppIcon />} path="/logout">
        Logout
      </MyNavLink>
    </div>
  );
}

export default MenuSidebar;
