import React from 'react'

import Curriculum from '../../../files/Curriculum_Carlos_Hernández_Gil.pdf'
import Resume from '../../../files/Resume_Carlos_Hernández_Gil.pdf'
 
import {ICONS} from '../../../Icons/constants'
import classesScss from './Presentation.module.scss'
import ContactIcon from '../../ContactIcon';

import { withStyles, Link } from '@material-ui/core';
import  Button  from '@material-ui/core/Button';
import Save from '@material-ui/icons/SaveAlt'



const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: '1rem'
  },
  iconPulsate: {
    '&:hover $leftIcon': {

      animation: 'bounce-icon 2000ms infinite'

    }
  },
  '@keyframes bounce-icon': {
    '0%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(-7px)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  }
});

const Presentation = (props) => {
 const { classes } = props;
  

  return (
    <section id="home" className={classesScss.presentation}>
      <h1 className="heading-1">A little bit about me</h1>
      <h1 className="heading-1">Carlos</h1>
      <h2 className="heading-2">Front-End Web Developer</h2>
      <div className={classesScss.wrapper__contact}>
        <ContactIcon
          icon={ICONS.TWITTER}
          href="https://twitter.com/chernandezgil1"
        />

        <ContactIcon
          icon={ICONS.GOOGLE}
          href="https://plus.google.com/u/0/113172397985877648848"
        />

        <ContactIcon icon={ICONS.GITHUB} href="https://github.com/cahergil" />

        <ContactIcon
          icon={ICONS.LINKEDIN}
          href="https://www.linkedin.com/in/hernandezgilcarlos/"
        />
      </div>
      <div className={classesScss.wrapper__download}>
        <Link href={Curriculum} underline="none" className={ classes.iconPulsate} download>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            <Save className={classes.leftIcon} />
            RESUME SPANISH
          </Button>
        </Link>
        <Link href={Resume} underline="none" className={classes.iconPulsate} download>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            <Save className={classes.leftIcon} />
            RESUME ENGLISH
          </Button>
          {/* <span>RESUME SPANISH</span> */}
        </Link>
      </div>
    </section>
  );
}

export default withStyles(styles)(Presentation);
