import React from 'react'
import { withStyles } from '@material-ui/core';
import ContactMail from '@material-ui/icons/ContactMail'
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import TitleGrid from '../../TitleGrid';

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  contactRectangle: {
    height: '5vw',
    backgroundColor: theme.palette.primary.light
  },
  contactEnvelope: {
    marginTop: '-1px',
    height: '10vw',
    backgroundImage:
      'linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1))',
    clipPath: 'polygon(50% 10vw, 0 0, 100% 0)'
  },
  buttonStyle: {
    // to center the button on the screen
    textAlign: 'center',
    // marginBottom: '10rem'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const ContactMe = (props)=> {
  return (
    <section id="contact" className={props.classes.root}>
      <div className={props.classes.contactRectangle} />
      <div className={props.classes.contactEnvelope} />
      <Fade duration={600} right>
        <TitleGrid title="Contact Me" color="#fff" lineLength="10rem" />
      </Fade>

      <div className={props.classes.buttonStyle}>
        <Zoom duration={300} delay={1000} clear >
          <a
            style={{ textDecoration: 'none' }}
            href="mailto:chernandezgil@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outlined"
              color="secondary"
              style={{ width: '20rem', fontSize: '2rem' }}
            >
              Send Mail
              <ContactMail className={props.classes.rightIcon} />
            </Button>
            </a>
        </Zoom>
      </div>
    </section>
  );
}

export default withStyles(styles)(ContactMe);
