import React from 'react';
// internal modules
import logo from 'assets/images/logo1.png';
import MenuSidebar from 'layout/left-sidebar/MenuSidebar';
//material-ui component
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
//material-ui icon
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { makeStyles } from '@material-ui/core/styles';

const leftSidebarStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  bottomSideBar: {
    marginLeft: '20px',
  },
  profileAva: {
    margin: '0 10%',
    backgroundColor: '#3f51b5',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function LeftSidebar() {
  let classes = leftSidebarStyle();
  return (
    <Box className={classes.root}>
      <Box>
        <img src={logo} alt="hi" height="40px" width="150px" />
        <MenuSidebar />
      </Box>
      <Box className={classes.bottomSideBar}>
        {/* <Badge badgeContent={4} color="primary">
          <NotificationsActiveIcon />
        </Badge> */}
        <Avatar className={classes.profileAva} alt="avatar" />
      </Box>
    </Box>
  );
}

export default LeftSidebar;
