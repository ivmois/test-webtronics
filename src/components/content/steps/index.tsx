import StepsLine from './steps-line';
import StepsList from './steps-list';
import styles from './steps.module.sass';

const Steps = () => {
  return (
    <section id="steps" className={styles.sectionSteps}>
      <h3 className={styles.title}>Steps</h3>
      <div className={styles.wrapContent}>
        <StepsList />
        <StepsLine />
      </div>
    </section>
  );
};

export default Steps;
