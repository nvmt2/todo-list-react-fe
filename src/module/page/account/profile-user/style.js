import { makeStyles } from '@material-ui/core/styles';
import { backgroundColorWhite, borderGrayColor } from 'style/variable';

export const userProfileStyle = makeStyles((them) => ({
  root: {
    width: '50%',
    margin: '20px auto',
    padding: '10px 20px',
    borderRadius: '5px',
    border: `1px solid ${borderGrayColor}`,
    backgroundColor: backgroundColorWhite,
    '& h3': {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '20px 0',
    },
    '& h6': {
      color: 'rgb(97, 97, 97)',
      fontSize: '14px',
    },
    '& .MuiFormControl-root': {
      display: 'block',
      margin: '15px 0',
    },
    '& .MuiInputBase-root': {
      width: '80%',
    },
  },
  colorTitle: {
    color: '#3f51b5',
  },
  buttonSave: {
    marginBottom: 10,
  },
  wrapperUploadForm: {
    padding: '0 10px',
    margin: '20px 0',
    display: 'flex',
    alignItems: 'flex-end',
  },
  wrapperButtonUpload: {
    maxWidth: '200px',
    marginLeft: '20px',
    '& > button': {
      margin: '5px 0',
    },
  },
}));
