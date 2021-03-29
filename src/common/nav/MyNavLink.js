import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//internal modules
import { actionSignOut } from 'module/page/account/redux/action';
// import { navLinkStyle } from 'common/nav/style';
//material-ui component
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from 'style/variable';

export const navLinkStyle = makeStyles((theme) => ({
  root: {
    fontWeight: '600',
    margin: '2px',
  },
  active: {
    color: primaryColor,
  },
}));

function MyNavLink(props) {
  // STATE
  const { id, icon, path, children, isActive, ...rest } = props;
  const classes = navLinkStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  //METHOD
  const handleClick = () => {
    if (path === '/logout') {
      dispatch(actionSignOut(token));
    } else {
      history.push(path);
    }
  };
  return (
    <Button
      className={`${classes.root} ${isActive && classes.active}`}
      startIcon={icon}
      // onClick={handleClick}
      onClick={() => handleClick(id)}
      {...rest}
    >
      {children}
    </Button>
  );
}
export default MyNavLink;
