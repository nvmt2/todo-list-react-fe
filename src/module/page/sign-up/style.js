import { makeStyles } from '@material-ui/core/styles';

export const signUpStyle = makeStyles((theme) => ({
  root: {
    width: '50%',
    margin: 'auto',
    marginTop: '50px',
    padding: '40px 100px',
    border: '1px solid #eaeaea',
    boxShadow: '5px 5px 15px 5px #efefef',
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
  submitButton: {
    fontWeight: 'bold',
    margin: '15px 0px 10px 0px',
  },
  signInForm: {
    '& > div': {
      margin: '5px 0',
      width: '100%',
    },
  },
}));
