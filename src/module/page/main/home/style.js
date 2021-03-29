import { makeStyles } from '@material-ui/core/styles';
import {
  backgroundColorWhite,
  borderGrayColor,
  titleColorGray,
} from 'style/variable';
//buttonAdd, body, titleShape
export const styleHome = makeStyles({
  body: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  titleShape: {
    padding: '30px 30px',
    marginTop: 5,
    marginRight: 5,
    borderRadius: 5,
    border: `1px solid ${borderGrayColor}`,
    backgroundColor: backgroundColorWhite,
    '& > h3': {
      color: titleColorGray,
      fontWeight: '600',
      fontSize: '18px',
    },
  },
  buttonAdd: {
    position: 'fixed',
    right: '50px',
    bottom: '35px',
    borderRadius: '50% 50%',
    backgroundColor: '#f3f4ff',
    boxShadow: '10px 10px 10px #c7c7c7',
  },
  pagination: {
    '& .MuiPagination-ul': {
      justifyContent: 'center',
      margin: 40,
    },
  },
});
