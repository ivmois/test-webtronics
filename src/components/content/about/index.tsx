import styles from './about.module.sass';
import MentorsList from './mentors-list';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h3 className={styles.title}>About us</h3>
      <div className={styles.content}>
        <div className={styles.mentors}>
          <h4 className={styles.mentorsTitle}>Mentors</h4>
          <div className={styles.mentorsContent}>
            <div className={styles.lines}></div>
            <MentorsList />
          </div>
        </div>
        <div className={styles.desc}>
          <p className={styles.text}>
            Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only
            the necessary languages and technologies, but how to think like a front-end engineer, too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
