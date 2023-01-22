import TechnologiesList from './ technologies-list';
import styles from './technologies.module.sass';

const Technologies = () => {
  return (
    <section id="technologies" className={styles.technologies}>
      <h3 className={styles.title}> Programming technologies</h3>
      <p className={styles.desc}>By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
      <TechnologiesList />
    </section>
  );
};

export default Technologies;
