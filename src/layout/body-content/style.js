import { makeStyles } from '@material-ui/core/styles';
import { backgroundColorLightGray } from 'style/variable.js';

export const bodyContentStyle = makeStyles((them) => ({
  parent: {
    display: 'grid',
    gridTemplateColumns: 'minmax(150px, 15%) 1fr',
    padding: 0,
    margin: 0,
  },
  sidebar: {
    minHeight: '100vh',
    background: backgroundColorLightGray,
  },
}));
