import React, { useState } from 'react';
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
  active: {
    color: 'blue',
  },
}));

function MyNavLink(props) {
  // STATE
  const { icon, path, children, ...rest } = props;
  const classes = navLinkStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const [isActive, setIsActive] = useState(false);

  //METHOD
  const handleClick = () => {
    if (path === '/logout') {
      dispatch(actionSignOut(token));
    } else {
      setIsActive(true);
      history.push(path);
    }
  };
  console.log('MyNavLink', isActive);
  return (
    <Button
      className={`${classes.root} ${isActive && classes.active}`}
      startIcon={icon}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Button>
  );
}
export default MyNavLink;
