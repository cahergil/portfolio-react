import React from 'react';
import { withStyles } from '@material-ui/core';

import Fade  from 'react-reveal/Fade';
import TitleGrid from '../../TitleGrid';
import { courses } from './Courses'
import EducationItem from './EducationItem/EducationItem';

const styles = (theme) => ({
  gridDesktop: {
    width: '100%',
    margin: '0 auto',

    display: 'grid',
    gridTemplateColumns: '45% 5px 45%',
    gridColumnGap: '1rem',
    justifyContent: 'center',
    [theme.breakpoints.down(650)]: {
      display: 'none'
    }
  },
  gridMobile: {
    width: '100',
    display: 'grid',
    gridTemplateColumns: '80%',
    gridRowGap: '2rem',
    justifyContent: 'center',
    [theme.breakpoints.up(650)]: {
      display: 'none'
    }
  },
  gridLeft: {

  },
  gridBar: {
    backgroundColor: '#b2dfdb'
  },
  gridRight: {

  },
  wrapper: {
    position: 'relative'
  },
  wrapperPointRight: {
    position: 'absolute',
    right: '0',
    top: '48%',
    zIndex: '100',
    width: '1rem',
    height: '1rem',
    backgroundColor: '#00695c',
    borderRadius: '50%',
    marginRight: '-17px'
  },
  wrapperPointLeft: {
    position: 'absolute',
    left: '0',
    top: '48%',
    zIndex: '100',
    width: '1rem',
    height: '1rem',
    backgroundColor: '#00695c',
    borderRadius: '50%',
    marginLeft: '-18px'
  }
});

const Education = (props) => {
  const { classes } = props;
  return (
    <section id="education">
      <Fade duration={600} left>
        <TitleGrid title="Education" color="#000" lineLength="10rem" />
      </Fade>
      <div className={classes.gridMobile}>
        {
          courses.map((course, index) => {
            return (
              <EducationItem key={index}
                name={course.name}
                organization={course.organization}
                duration={course.duration}
                endDate={course.endDate}
                nanodegree={course.nanodegree}
                certificate={course.certificate}
                degree={course.degree}
               

              />
            );
          })

        }
      </div>
      <div className={classes.gridDesktop}>
        <div className={classes.gridLeft}>
          {
            courses.map((course, index) => {
              return (
                <React.Fragment key={index}>
                  <div style={{ marginTop: index === 0 ? '' : '20px' }}>
                  </div >
                  { index%2 ===0 && 
                    <div className={classes.wrapper}>
                    <EducationItem
                      name={course.name}
                      organization={course.organization}
                      duration={course.duration}
                      endDate={course.endDate}
                      nanodegree={course.nanodegree}
                      certificate={course.certificate}
                      degree={course.degree}
                      i={index}

                    />
                      <div className={classes.wrapperPointRight}></div>
                    </div>
                  }

                </React.Fragment>
              );
            })

          }
        </div>
        <div className={classes.gridBar}></div>
        <div className={classes.gridRight}>
          {
            courses.map((course, index) => {
              return (
                <React.Fragment key={index}>
                  <div style={{ marginTop: index === 0 ? '' : '30px' }}>
                  </div >
                  {index % 2 !== 0 &&
                    <div className={classes.wrapper}>
                      <EducationItem
                        name={course.name}
                        organization={course.organization}
                        duration={course.duration}
                        endDate={course.endDate}
                        nanodegree={course.nanodegree}
                        certificate={course.certificate}
                        degree={course.degree}
                        i={index}
                      />
                      <div className={classes.wrapperPointLeft}></div>
                    </div>
                  }

                </React.Fragment>
              );
            })

          }
        </div>

      </div>
    </section>
  );
}

export default withStyles(styles)(Education);