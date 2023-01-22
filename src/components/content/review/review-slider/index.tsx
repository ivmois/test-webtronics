import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { reviewData } from '../reviewData';
import ReviewControl from './review-control';
import ReviewDesc from './review-desc';
import ReviewPhoto from './review-photo';
import styles from './slider.module.sass';

const ReviewSlider = () => {
  const count = useSelector<RootState, number>((state) => state.review);

  const reviewList = reviewData;
  const [currentItem] = reviewList.filter((item) => item.number === count);

  return (
    <div className={styles.slider}>
      <ReviewControl totalItems={reviewList.length} />
      <div className={styles.content}>
        <ReviewDesc number={currentItem.number} title={currentItem.title} text={currentItem.text} />
        <ul className={styles.photos}>
          {reviewList.map((item) => (
            <ReviewPhoto key={item.number} number={item.number} src={item.src} photoPosition={item.photoPosition} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewSlider;
