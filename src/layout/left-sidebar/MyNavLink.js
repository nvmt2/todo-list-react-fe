import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//internal modules
import { actionSignOut } from 'redux/user/action';
//material-ui component
import Button from '@material-ui/core/Button';

const navLinkStyle = makeStyles((them) => ({
  root: {
    fontWeight: '600',
    margin: '2px',
  },
}));

function MyNavLink(props) {
  // STATE
  const { icon, path, children, ...rest } = props;
  const classes = navLinkStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const handleClick = () => {
    if (path === '/logout') {
      dispatch(actionSignOut(token));
    } else {
      history.push(path);
    }
  };

  return (
    <Button
      className={classes.root}
      startIcon={icon}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Button>
  );
}
export default MyNavLink;
