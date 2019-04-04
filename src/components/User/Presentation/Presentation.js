import React from 'react'

import {ICONS} from '../../../Icons/constants'
import classesScss from './Presentation.module.scss'
import ContactIcon from '../../ContactIcon';

const Presentation = (props) => {
  // const { classes } = props;
  

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

        <ContactIcon
          icon={ICONS.GITHUB}
          href="https://github.com/cahergil" />

        <ContactIcon
          icon={ICONS.LINKEDIN}
          href="https://www.linkedin.com/in/hernandezgilcarlos/"
        />
      </div>
    </section>
  );
}

export default Presentation;
