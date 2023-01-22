import { memo, useEffect, useState } from 'react';
import styles from './question-item.module.sass';

interface IQuestionItem {
  question: string;
  answer: string;
  isOpenDefault: boolean;
}

const QuestionItem = memo(({ question, answer, isOpenDefault }: IQuestionItem) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <li className={styles.questionItem}>
      <div className={`${styles.content} ${isOpen && styles.isOpen}`}>
        <button className={styles.button} onClick={() => setIsOpen((prev) => !prev)}>
          {question}
        </button>

        <p className={`${styles.text}`}>{answer}</p>
        <span className={styles.cross}></span>
      </div>
    </li>
  );
});

export default QuestionItem;
