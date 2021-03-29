import React from 'react';
// internal module
import LeftSidebar from 'layout/left-sidebar';
import { bodyContentStyle } from 'layout/body-content/style';
// material-UI components
import Box from '@material-ui/core/Box';

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
