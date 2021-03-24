import { makeStyles } from '@material-ui/core/styles';
import { backgroundColorWhite, borderGrayColor } from 'style/mixin';

export const styleHome = makeStyles({
  body: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  parentCard: {
    minWidth: 275,
    maxWidth: 380,
    margin: '10px 10px 10px 0px',
    padding: 5,
    border: `1px solid ${borderGrayColor}`,
  },
  time: {
    color: 'rgb(97, 97, 97)',
    marginBottom: 15,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  titleShape: {
    padding: '30px 30px',
    marginTop: 5,
    marginRight: 5,
    borderRadius: 5,
    border: `1px solid ${borderGrayColor}`,
    backgroundColor: backgroundColorWhite,
    '& > h3': {
      color: 'rgb(97, 97, 97)',
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
});
