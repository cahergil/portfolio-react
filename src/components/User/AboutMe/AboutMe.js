import React from 'react'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { withStyles, Avatar} from '@material-ui/core';
import personalPhoto from '../../../images/carnet_clipped.jpg'
import TitleGrid from '../../TitleGrid';
import 'animate.css/animate.min.css';
// import ScrollAnimation from 'react-animate-on-scroll';


const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '10rem'
  },
  responsiveGrid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
    gridColumnGap: '3rem',
    gridRowGap: '3rem',
    padding: '0 10vw',
    justifyItems: 'center',
    opacity: 0
  },
  bigAvatar: {
    width: 200,
    height: 200,
    margin: 10

    // background:
  },
  aboutText: {
    fontWeight: '300',
    fontSize: '1.7rem',
    color: theme.palette.primary.dark
  },
  aboutTextName: {
    fontWeight: '500',
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  aboutTextRole: {
    color: '#999',
    marginBottom: '1rem'
  }
});


const AboutMe = (props) => {
  const { classes } = props;
  return (
    <section id="about" className={classes.root}>
      <Fade duration={600} left>
        <TitleGrid title="About Me" color="#000" lineLength="10rem" />
      </Fade>


      {/* <ScrollAnimation animateIn="fadeIn" duration="2" delay="0.6" > */}
      <Reveal effect="fadeIn" duration={4000}>
      <div className={classes.responsiveGrid}>
          <Avatar
            src={personalPhoto}
            className={classes.bigAvatar}
            style={{ border: '3px solid #ccc' }}
            />
        <div className={classes.aboutText}>
          <p className={classes.aboutTextName}>Carlos Hernández Gil</p>
          <p className={classes.aboutTextRole}>
            Web Developer and enthusiastic coder
          </p>
          <div className={classes.aboutTextDescription}>
            I am currently in the path to be a Web Developer. To earn a living
            I give tennis classes, sport that I also practice along with
            paddeltennis, a popular sport in Spain. In my spare time I like to
            watch documentaries, read books about history and learn german.
            <br />
            <br />
            I have been writing Frontend code and taking trainning for
            12 months now, and my prefered frameworks are Angular and React,
            in no strict order. I have a passion for Frontend because it
            allows a certain grade of creativity while at the same time
            requires a high level of mastery in a wide variety of
            technologies.
            <br /><br />
          </div>
        </div>
      </div>
      {/* </ScrollAnimation> */}
      </Reveal>
    </section>
  );
}

export default withStyles(styles)(AboutMe);
