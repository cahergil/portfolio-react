import React from 'react';
import TitleGrid from '../../TitleGrid';
import  Fade  from 'react-reveal/Fade';
import { withStyles } from '@material-ui/core';
import scssClasses from './Skills.module.scss';
import Skill from './Skill/Skill';
import { SkillModel } from './Skill.model';
const styles = (theme) => ({
 
  skillsGrid: {

    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(40rem, 1fr))',
    gridColumnGap: '0rem',
    gridRowGap: '5rem',
    justifyContent: 'center',
    justifyItems: 'center',
    padding: '0 10vw',
    marginBottom: '10rem'
  }

})

// const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Angular2+', 'Git', 'Java', 'SQL','SASS']
const skills = [
  new SkillModel('JavaScript', '65', '#FFEB3B'),
  new SkillModel('HTML', '70', '#FF9800'),
  new SkillModel('CSS', '70', '#3F51B5'),
  new SkillModel('React', '60', '#61DAFB'),
  new SkillModel('Angular+2', '60', '#D32F2F'),
  new SkillModel('Git', '60', '#616161'),
  new SkillModel('Java', '70', '#A4C639'),
  new SkillModel('SQL', '80', '#795548'),
  new SkillModel('SASS', '55', '#E91E63')
];
const  Skills = (props) => {
  return (
    <section id="skills" className={scssClasses.Root}>
       <Fade duration={600} left>
        <TitleGrid title="My Skills" color="#fff" lineLength="10rem" />
      </Fade> 
      <div className={props.classes.skillsGrid}>
        {
          skills.map((skill,index) => {
            return (
              <Skill
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color} />              
            );
          })
          
        }

      </div>
    </section>
  )
}

export default withStyles(styles)(Skills);
