import { makeStyles } from '@material-ui/core/styles';
import { borderGrayColor } from 'style/mixin';

export const styleCard = makeStyles({
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
});
