import { makeStyles } from '@material-ui/core/styles';
import { titleColorGray } from 'style/variable';

export const styleDialog = makeStyles({
  root: {
    margin: 0,
    '& button': {
      margin: '10px 10px 10px 0px',
    },
  },
  formDialog: {
    '& > div': {
      marginBottom: 10,
    },
  },
  title: {
    fontWeight: 'bold',
    color: titleColorGray,
    fontSize: 20,
  },
});
