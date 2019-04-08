import React from 'react';
import withPropsStyles from '../../../withPropsStyles';


const hundred = 100;

const styles = (props, theme) => ({
  skillGrid: {
    height: '5rem',
    width: '40rem',
    [theme.breakpoints.down('sm')]: {
      width: '30rem'
    },
    backgroundColor: '#ccc',
    borderRadius: '6px',
    display: 'grid',
    // eslint-disable-next-line
    gridTemplateColumns: `${props.percentage}%` + `${hundred - props.percentage}%`,
    alignItems: 'center',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    transition: 'transform .3s'
  
  },
  cellSkill: {
    height: '100%',
    lineHeight: '5rem',
    backgroundColor: props.color,
    alignSelf: 'center',
    paddingLeft: '1rem',
    fontSize: '1.8rem',
    color: theme.palette.text.primary
  },
  cellPercentage: {
    color: theme.palette.primary.dark,
    fontSize: '1.8rem',
    justifySelf: 'end',
    paddingRight: '.5rem'
  }
});

const Skill = (props) => {

  return (
    
     <div className={props.classes.skillGrid}> 
      <div className={props.classes.cellSkill}>{props.name}</div>
      <div className={props.classes.cellPercentage}>{props.percentage}%</div>
    </div>
  );
}

export default withPropsStyles(styles)(Skill);