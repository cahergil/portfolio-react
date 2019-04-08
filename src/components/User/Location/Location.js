import React from 'react'
import  Fade  from 'react-reveal/Fade';
import TitleGrid from '../../TitleGrid';
import scssClasses from './Location.module.scss';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  
  mapContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyContent: 'center',
    alignContent: 'center'
  },
  map: {
    justifySelf: 'center',
    maxWidth: '90vw',
    border: `5px solid #999`,
    marginBottom: '10rem'
  }
});

const Location = ({classes}) => {
  return (
    <section id="location" className={scssClasses.root}>
      <Fade duration={600} left>
        <TitleGrid title="Where I live" color="#000" lineLength="10rem" />
      </Fade>
      <div className={classes.mapContainer}>
        <iframe title="map" className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175829.2136382647!2d-8.040843977341076!3d38.98346414731515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd14599bd68efa69%3A0x9d22b3b7d9217a75!2sCalle+Conde+Cartagena%2C+36%2C+06700+Villanueva+de+la+Serena%2C+Badajoz!5e0!3m2!1sde!2ses!4v1549274085872"
        width="600" height="450" frameborder="0" style={{ border: '6' }} allowfullscreen>
        </iframe>
      </div>
    </section>
  
  );
}

export default withStyles(styles)(Location);
