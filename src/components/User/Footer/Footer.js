import React from 'react'
import { withStyles, Link } from '@material-ui/core';

const styles = theme => ({
  root: {
    height: '5rem',
    backgroundColor: theme.palette.primary.dark,
    fontSize: '1.7rem',
  },
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0.6'

  },
  marginAdmin: {
    marginLeft: '2rem'
  }
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <section id="footer" className={classes.root}>
      <div className={classes.wrapper}>
        <div style= {{color: '#fff'}}>Carlos Hernández Gil</div>
        <div style={{ color: '#E91E63'}}>&copy;2019</div>
        <Link className={classes.marginAdmin}>Admin</Link>
      </div>
    </section>
  )
}

export default withStyles(styles)(Footer);
