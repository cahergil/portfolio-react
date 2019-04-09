import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import TitleGrid from '../../TitleGrid';
import { withStyles } from '@material-ui/core';
import { Project } from './Project.model';
import FeaturedWorkItem from './FeaturedWorkItem/FeaturedWorkItem';

const styles = (theme) => ({
  root: {
    marginBottom: '10rem'
  },

  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(35rem, 1fr))',
    [theme.breakpoints.down(820)]: {
      gridTemplateColumns: '35rem',
      justifyContent: 'center'

    },
    gridColumnGap: '2rem',
    gridRowGap: '2rem',
    padding: '0 5vw'
  }
});

const project1 = new Project(
  'portfolio.png',
  'Portfolio Angular project',
  'Angular 7, Sass',
  'http://carloshernandezgil.com'
);
const project2 = new Project(
  'portfolio_react.png',
  'Portfolio React project',
  'React, Material UI, Sass',
  'https://cahergil.github.io/portfolio-react'
);
const project3 = new Project(
  'mg.png',
  'memory game',
  'CSS, HTML and JavaScript',
  'https://cahergil.github.io/memorygame/',
  'https://github.com/cahergil/memory-game'
);
const project4 = new Project(
  'arcade-game.png',
  'Frogger game',
  'CSS, HTML canvas and OOJS, only Desktop',
  'https://cahergil.github.io/froggergame/',
  'https://github.com/cahergil/arcade-game'
);
const project5 = new Project(
  'farmacias1.png',
  'Farmaex',
  'Android app',
  'https://play.google.com/store/apps/details?id=com.chernandezgil.farmacias&hl=es',
  'https://github.com/cahergil/Farmacias'
);
// const project6 = new Project(
//   'restaurants_review.png',
//   'Restaurant reviews',
//   'CSS, HTML, JavaScript',
//   'https://cahergil.github.io/rreviews/index.html',
//   'https://github.com/cahergil/restaurant-reviews'
// );
const project7 = new Project(
  'myreads.png',
  'Book tracking app',
  'React, React Router',
  'https://cahergil.github.io/myreads-book-tracking/#/',
  'https://github.com/cahergil/myreads-book-tracking'
);
const project8 = new Project(
  'neighborhood_small.png',
  'Spains national parks',
  'React',
  'https://cahergil.github.io/neighborhood-map/',
  'https://github.com/cahergil/neighborhood-map'
);
const projects = [];
projects.push(project1, project2, project3, project4, project5, project7, project8);


const FeaturedWork = (props) => {

  return (
    <section id="projects" className={props.classes.root}>
      <Fade duration={600} right>
        <TitleGrid title="Featured work" color="#000" lineLength="15rem" />
      </Fade> 
      <div className={props.classes.projectsGrid}>
        {
          projects.map((project, index) => {
            return (
              <Zoom key={index} clear >
                <FeaturedWorkItem
                  i={index}
                  imagePath={project.imagePath} 
                  name={project.name}
                  technologies={project.technologies}
                  url={project.url}
                  githubPath={project.githubPath}
                  />  
              </Zoom>
            );  
          })
        }
      </div>
    </section>
  )
}

export default withStyles(styles)(FeaturedWork);
