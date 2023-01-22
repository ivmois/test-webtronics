import styles from './review-desc.module.sass';

interface IReviewDesc {
  number: number;
  title: string;
  text: string;
}

const ReviewDesc = ({ number, title, text }: IReviewDesc) => {
  return (
    <div className={styles.desc}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ReviewDesc;
