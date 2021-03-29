import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
//material-ui component
import Button from '@material-ui/core/Button';

const navLinkStyle = makeStyles((them) => ({
  root: {
    fontWeight: '600',
    margin: '2px',
  },
}));

function MyNavLink(props) {
  const { icon, path, children, ...rest } = props;
  const classes = navLinkStyle();
  let history = useHistory();

  const handleClick = () => {
    if (path === '/logout') console.log('Hello logout');
    else {
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
