import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from 'style/variable';

export const navLinkStyle = makeStyles((theme) => ({
  root: {
    fontWeight: '600',
    margin: '2px',
  },
  active: {
    color: primaryColor,
  },
}));
