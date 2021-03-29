//material-ui icon
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const listNavLink = [
  {
    id: 1,
    title: 'Todo',
    path: '/',
    icon: <DynamicFeedIcon />,
  },
  {
    id: 2,
    title: 'Account',
    path: '/userProfile',
    icon: <AccountBoxIcon />,
  },
  {
    id: 3,
    title: 'Logout',
    path: '/logout',
    icon: <ExitToAppIcon />,
  },
];
