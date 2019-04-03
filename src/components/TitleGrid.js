import React from 'react';
import withPropsStyles from './withPropsStyles';


const styles = (props, theme) => ({
  headingGrid: {
    margin: '10rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '1rem',
    justifyContent: 'center',
    justifyItems: 'center',
    marginBottom: '7rem'
  },
  title: {
    color: props.color,
    fontSize: '4rem',
    fontWeight: 300
  },
  underline: {
    
    width: props.lineLength,
    height: '0.3rem',
    background: theme.palette.secondary.main
  }
  
});




const TitleGrid = ({classes}) => {
 

  return (
    <div className={classes.headingGrid}>
      <h1 className={classes.title}>
        About me
      </h1>
      <div className={classes.underline}>
      </div>
    </div>
  );

}

export default withPropsStyles(styles)(TitleGrid);