import React from 'react';
import withPropsStyles from '../../../withPropsStyles';

const styles = (props, theme) => ({
  container: {
    filter: 'drop-shadow(0px 5px 5px rgba(0,0,0,0.4))'
  },
  course: {
    width: '100%',
    backgroundColor: '#faf9f9',
    padding: '2rem',
    borderTop: `3px solid ${theme.palette.secondary.main}`,

    display: 'grid',
    gridTemplateRows: 'repeat(1, 1fr) repeat(2, 3rem)',
    gridRowGap: '1rem'
  },
  courseHeader: {
    color: theme.palette.primary.main,
    fontSize: '2.7rem',
    display: 'flex'
  },
  courseHeaderName: {},
  courseHeaderHours: {
    alignSelf: 'center',
    marginRight: '1rem',
    fontSize: '1.2rem'
  },
  courseOrganization: {
    color: '#626262',
    fontSize: '1.8rem'
  },
  courseEndDate: {
    fontSize: '1.5rem',
    display: 'grid',
    gridTemplateColumns: 'max-content',
    alignItems: 'center',
    filter: 'drop-shadow(0px 10px 5px rgba(0,0,0,0.4))'
  },
  badgeEndDate: {
    padding: '0.5rem',
    paddingTop: '0.7rem',
    paddingBottom: '2rem',
    backgroundColor: props.nanodegree
      ? '#448AFF'
      : props.certificate || props.degree
      ? '#FBC02D'
      : theme.palette.secondary.main,
    color: props.certificate || props.degree ? ' #000' : '#fff',
    clipPath:
      'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
  },
  alignedRight: {
    marginLeft: 'auto',
    marginRight: '0',
    clipPath:
      'polygon(0% 0%, 97% 0%, 97% 35%, 100% 50%, 97% 65%, 97% 100%, 0% 100%)'
  },
  alignedLeft: {
    marginLeft: '0',
    marginRight: 'auto',
    paddingLeft: '2.7rem',
    clipPath:
      'polygon(0% 50%, 3% 35%, 3% 0% ,100% 0%, 100% 100%, 3% 100%, 3% 65%)'
  },
  badge: {
    backgroundColor: props.nanodegree
      ? '#448AFF'
      : theme.palette.secondary.main,
    color: theme.palette.text.primary,
    borderRadius: '50%',
    padding: '0.6rem'
  }
});

const EducationItem = (props) => {
  const { classes,name, organization, duration, endDate, nanodegree, certificate, degree, i} = props;
  return (
    <div className={classes.container}>
      <div
        className={`${classes.course} ${
          i === undefined
            ? ''
            : i % 2 === 0
            ? classes.alignedRight
            : classes.alignedLeft
        }`}
        style={{
          backgroundColor: certificate
            ? '#FFFF8D'
            : nanodegree
            ? '#82B1FF'
            : degree
            ? '#FFEB3B'
            : '#faf9f9'
        }}
      >
        <div className={classes.courseHeader}>
          {!certificate && !degree && (
            <div className={`${classes.badge} ${classes.courseHeaderHours}`}>
              {duration}
            </div>
          )}
          <div className={classes.courseHeaderName}>{name}</div>
        </div>

        <div className={classes.courseOrganization}>{organization}</div>
        <div className={classes.courseEndDate} >
          <div className={classes.badgeEndDate}>
            {endDate}
          </div>      
            
        </div>
      </div>
    </div>
  );
}

export default withPropsStyles(styles)(EducationItem);