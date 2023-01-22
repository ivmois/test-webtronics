import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import stylesBig from './photo-big.module.sass';
import stylesSmall from './photo-small.module.sass';

interface IReviewPhoto {
  number: number;
  src: string;
  photoPosition: string;
}

const ReviewPhoto = ({ number, src, photoPosition }: IReviewPhoto) => {
  const count = useSelector<RootState, number>((state) => state.review);

  const styles = number === count ? stylesBig : stylesSmall;

  return (
    <li className={styles.listItem}>
      <div className={styles.photo}>
        <img className={styles.img} src={src} style={{ objectPosition: photoPosition }} />
      </div>
    </li>
  );
};

export default ReviewPhoto;
