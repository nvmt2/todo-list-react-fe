import { makeStyles } from '@material-ui/core/styles';

export const userProfileStyle = makeStyles((them) => ({
  parent: {
    display: 'grid',
    gridTemplateColumns: 'minmax(150px, 25%) 1fr',
    padding: 0,
    margin: 0,
  },
  sidebar: {
    height: '80vh',
    background: 'blue',
    fontSize: '2rem',
    textAlign: 'center',
  },
  content: {
    padding: '2rem',
    background: 'pink',
  },
}));
