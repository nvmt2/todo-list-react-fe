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
