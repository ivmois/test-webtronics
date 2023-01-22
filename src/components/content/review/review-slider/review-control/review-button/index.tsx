import { PositionItem } from '../../../../../../types/enums';
import styles from './review-button.module.sass';

interface IReviewButton {
  position: PositionItem;
  onClick: () => void;
}

const ReviewButton = ({ position, onClick }: IReviewButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={`${styles.arrow} ${styles[position]}`} />
    </button>
  );
};

export default ReviewButton;
