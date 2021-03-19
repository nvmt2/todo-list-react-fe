import React from 'react';
// internal module
import LeftSidebar from 'layout/left-sidebar';
// material-UI components
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const bodyContentStyle = makeStyles((them) => ({
  parent: {
    display: 'grid',
    gridTemplateColumns: 'minmax(150px, 15%) 1fr',
    padding: 0,
    margin: 0,
  },
  sidebar: {
    minHeight: '100vh',
    background: '#f5f7fa',
  },
}));
function BodyContent(props) {
  const classes = bodyContentStyle();
  return (
    <Box className={classes.parent}>
      <Box className={classes.sidebar}>
        <LeftSidebar />
      </Box>
      <Box>{props.children}</Box>
    </Box>
  );
}

export default BodyContent;
