
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles, Theme, Link } from '@material-ui/core';

const styles = (theme: Theme) => ({
  iconHover: {
    // margin: theme.spacing.unit * 2,
    color:  theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.secondary,
      transform: 'scale(1.3)'
    },
    transition: '300ms all'
  }
})


const ContactIcon = (props: any) => {
  const { classes } = props;
  return (
    <Link href={props.href}>
    <SvgIcon
      
      viewBox="0 0 1024 1024"
      className={classes.iconHover}>
      <path d={props.icon} />
      </SvgIcon>
    </Link>
  );
}

export default withStyles(styles)(ContactIcon);
