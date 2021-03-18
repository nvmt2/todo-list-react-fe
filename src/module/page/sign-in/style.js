import { makeStyles } from '@material-ui/core/styles';

export const signInStyle = makeStyles((them) => ({
  title: {
    margin: '20px 0',
  },
  subTitle1: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '25px 0',
  },
  subTitle2: {
    color: 'rgb(97, 97, 97)',
    fontSize: '14px',
  },
  gitHubButton: {
    color: 'white',
    backgroundColor: 'black',
    minWidth: '100px',
    padding: '12px 30px',
    margin: '5px',
  },
  linkedInButton: {
    minWidth: '100px',
    padding: '12px 30px',
    margin: '5px',
    backgroundColor: '#0077b5',
    color: 'white',
  },
  facebookButton: {
    minWidth: '100px',
    padding: '12px 30px',
    margin: '5px',
  },
  submitButton: {
    fontWeight: 'bold',
    margin: '15px 0px 50px 0px',
  },
  signInForm: {
    '& > div': {
      margin: '5px 0',
      width: '100%',
    },
  },
}));
