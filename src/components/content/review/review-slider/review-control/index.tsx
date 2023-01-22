import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { countDecrement, countIncrement } from '../../../../../store/reducers/reveiwReducer';
import { PositionItem } from '../../../../../types/enums';
import ReviewButton from './review-button';
import styles from './review-control.module.sass';

interface IReviewControl {
  totalItems: number;
}

const ReveiwControl = ({ totalItems }: IReviewControl) => {
  const count = useSelector<RootState, number>((state) => state.review);
  const dispatch = useDispatch();

  const nextItem = () => {
    if (count < totalItems) dispatch(countIncrement());
  };

  const prevItem = () => {
    if (count > 1) dispatch(countDecrement());
  };

  return (
    <div className={styles.control}>
      <div className={styles.pagination}>
        <span className={styles.currentSlide}>{`${count}/`}</span>
        <span className={styles.allSlides}>{` ${totalItems}`}</span>
      </div>
      <div className={styles.wrapButtons}>
        <ReviewButton onClick={() => prevItem()} position={PositionItem.left} />
        <ReviewButton onClick={() => nextItem()} position={PositionItem.right} />
      </div>
    </div>
  );
};

export default ReveiwControl;
