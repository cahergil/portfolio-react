import React from 'react';
import { withStyles, Link } from '@material-ui/core';

import classesScss from './FeaturedWorkItem.module.scss';
import { ICONS } from './../../../../Icons/constants';
import  SvgIcon  from '@material-ui/core/SvgIcon';
import TechItem from './TechItem/TechItem';

const styles = theme => ({
  root: {
    height: '30rem',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 3rem 6rem rgb(0,0,0,0.2)',
    '&:hover': {
      '& $description': {
        opacity: '1',
        visibility: 'visible',
        transform: 'translate(-50%, -50%)'
      },
      '& $image': {
        opacity: '0.05'
      }
    },
    overflow:'hidden'
  },
  image: {
    width: '100%',
    maxHeight: '30rem',
    objectFit: 'cover',
    transition: 'all 0.3s'
  },
  description: {
    width: '100%',
    padding: '0 2rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -200%)',
    fontSize: '1.8rem',
    color: theme.palette.primary.dark,
    '& > *:not(:last-child)': {
      marginBottom: '1rem'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: '0',
    textAlign: 'center',
    visibility: 'hidden',
    transition: 'all .3s'
  },
  descriptionName: {
    textTransform: 'capitalize',
    fontWeight: '500',
    color: theme.palette.primary.dark,
    opacity: '0.87',
    fontSize: '2rem'
  },
  descriptionTechnologies: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

    '& > *': {
       margin: '2px 3px'
    }
    // color: '#777'
  },
  descriptionLink: {
    marginBottom: '1rem'
  },
  descriptionImage: {
    color: theme.palette.primary.dark,
    height: '3rem',
    width: '3rem',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
      color: theme.palette.secondary.main
    }
  }
});

const FeaturedWorkItem = (props) => {
  const { classes, imagePath, name, technologies, url,i,githubPath } = props;
  const techItems = technologies.split(',');
  return (
    <div className={classes.root}>
      <img
        src={require(`../../../../images/${imagePath}`)}
        alt={`project ${i}`}
        className={classes.image}
      />
      <div className={classes.description}>
        <p className={classes.descriptionName}>{name}</p>
        <div className={classes.descriptionTechnologies}>
           { techItems.map((techItem,i) => <TechItem key={i} techItem={techItem} />
             
           )}
        </div>
        <Link href={githubPath} className={classes.descriptionLink}>
          
            <SvgIcon
              viewBox="0 0 1024 1024"
              className={classes.descriptionImage}
            >
              <path d={ICONS.GITHUB} />
            </SvgIcon>
          
        </Link>

        <div>
          <a href={url} className={classesScss.btnText}>
            Launch app &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(FeaturedWorkItem);