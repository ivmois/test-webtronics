import QuestionsList from './questions-list';
import styles from './questions.module.sass';

const Questions = () => {
  return (
    <section id="questions" className={styles.questionsSection}>
      <h3 className={styles.title}> Frequently Asked Questions</h3>
      <div className={styles.content}>
        <div className={styles.desc}>
          <img className={styles.img} src="/img/bg/questions.png" />
          <p className={styles.text}>Do you have any kind of questions? We are here to help.</p>
        </div>
        <QuestionsList />
      </div>
    </section>
  );
};

export default Questions;
