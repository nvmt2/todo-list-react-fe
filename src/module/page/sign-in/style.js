import { makeStyles } from '@material-ui/core/styles';

export const signInStyle = makeStyles((them) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  boxSignIn: {
    width: '50%',
    padding: '40px 100px',
    border: '1px solid #eaeaea',
    boxShadow: '0 25px 50px -12px #b2b2b2',
    borderRadius: '5px',
  },
  title: {
    marginBottom: '20px',
  },
  subTitle1: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '25px 0',
  },
  subTitle2: {
    color: 'rgb(97, 97, 97)',
    fontSize: '14px',
    '& a': {
      textDecoration: 'none',
    },
  },
  gitHubButton: {
    color: 'white',
    backgroundColor: 'black',
    minWidth: '100px',
    padding: '12px 30px',
    marginRight: '5px',
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
