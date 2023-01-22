import { PositionItem } from '../../../../../../types/enums';
import styles from './arrow.module.sass';
import SvgArrow from './svgArrow';

interface IArrow {
  position: PositionItem;
}

const Arrow = ({ position }: IArrow) => {
  return (
    <div className={`${styles.arrowWrap} ${styles[position]}`}>
      <div className={styles.circle}></div>
      <div className={styles.arrow}>
        <SvgArrow />
      </div>
    </div>
  );
};

export default Arrow;
