import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
  //  display: 'inline-block',
   margin: '3px',
   padding: '6px',
   backgroundColor: theme.palette.secondary.main,
   color: '#000',
   opacity: '0.87',
   fontSize: '1.5rem',
   borderRadius: '5px'
  }
});

const TechItem = (props) => {
  const { classes, techItem} = props;
  return (
     <div className={classes.root}>
     {techItem}
     </div>
  );
}

export default withStyles(styles)(TechItem);