import { questionsList } from '../questionsData';
import QuestionItem from './question-item';
import styles from './questions-list.module.sass';

const QuestionsList = () => {
  const questions = questionsList;

  return (
    <ul className={styles.questionsList}>
      {questions.map((item, index) => (
        <QuestionItem key={item.id} question={item.question} answer={item.answer} isOpenDefault={index === 0 ? true : false} />
      ))}
    </ul>
  );
};

export default QuestionsList;
