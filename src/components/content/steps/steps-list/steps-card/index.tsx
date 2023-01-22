import { PositionItem } from '../../../../../types/enums';
import Arrow from './arrow';
import styles from './steps-card.module.sass';

interface IStepsCard {
  number: number;
  name: string;
  text: string;
}

export const StepsCard = ({ number, name, text }: IStepsCard) => {
  // для направление внешнего бордера
  const position: PositionItem = number % 2 === 0 ? PositionItem.right : PositionItem.left;

  return (
    <li className={styles.cardItems}>
      <div className={`${styles.card} ${styles[position]} `}>
        <div className={styles.content}>
          <span className={styles.number}> {`Step ${number}`}</span>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <Arrow position={position} />
    </li>
  );
};

export default StepsCard;
