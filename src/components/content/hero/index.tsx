import React from 'react';
import { scroller } from 'react-scroll';
import { ButtonType } from '../../../types/enums';
import Button from '../../button';
import styles from './hero.module.sass';

const Hero = () => {
  const handleClick = () => {
    scroller.scrollTo('contact', { duration: 200, smooth: true });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.title}>Front-End</h2>
        <p className={styles.desc}>
          Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
        </p>
        <div className={styles.wrapBtn}>
          <Button text={'Start my career change'} type={ButtonType.button} onClick={() => handleClick()} />
        </div>
        <div className={styles.wrapTitle}>
          <h2 className={styles.title}>
            Developer <span>Courses</span>{' '}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
