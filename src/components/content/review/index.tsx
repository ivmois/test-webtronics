import ReviewSlider from './review-slider';
import styles from './review.module.sass';

const Review = () => {
  return (
    <section id="review" className={styles.reviewSection}>
      <h3 className={styles.title}>Review</h3>
      <ReviewSlider />
    </section>
  );
};

export default Review;
