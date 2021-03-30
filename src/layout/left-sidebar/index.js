import React, { useEffect, useState } from 'react';
// internal modules
import logo from 'assets/images/logo1.png';
import MenuSidebar from 'common/nav/MenuLink';
// import { leftSidebarStyle } from 'layout/left-sidebar/style';
import { getUserImage } from 'service/userApi';
//material-ui component
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
//material-ui icon
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from 'style/variable';

export const leftSidebarStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '30px 20px',
    boxSizing: 'border-box',
    '& img': {
      marginBottom: '20px',
    },
  },
  bottomSideBar: {
    marginLeft: '20px',
  },
  notification: {
    margin: '5px 20%',
    display: 'inline-block',
  },
  profileAva: {
    margin: '0 10%',
    backgroundColor: primaryColor,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  menuSidebar: {
    marginTop: 20,
  },
}));

function LeftSidebar() {
  let classes = leftSidebarStyle();
  const [src, setSrc] = useState(null);

  const getImage = () => {
    getUserImage('605452a21a4f9d0017e35d6c')
      .then((baseImage) => {
        setSrc(baseImage.request);
        console.log('getImage', baseImage);
      })
      .catch((err) => console.log('ERR_getImage: ', err));
  };

  useEffect(() => {
    getImage();
  }, []);
  console.log('LeftSidebar');

  return (
    <Box className={classes.root}>
      <Box>
        <img src={logo} alt="hi" height="40px" width="150px" />
        <MenuSidebar className={classes.menuSidebar} />
      </Box>
      <Box className={classes.bottomSideBar}>
        <Badge
          className={classes.notification}
          badgeContent={4}
          color="primary"
        >
          <NotificationsActiveIcon />
        </Badge>
        <Avatar
          className={classes.profileAva}
          src={src && src.responseURL}
          alt="avatar"
        />
      </Box>
    </Box>
  );
}

export default LeftSidebar;
