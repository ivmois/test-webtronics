import styles from './technologies-item.module.sass';

interface ITechnologiesItem {
  name: string;
  src: string;
}

const TechnologiesItem = ({ name, src }: ITechnologiesItem) => {
  return (
    <li className={styles.technologiesItem}>
      <div className={styles.content}>
        <img className={styles.img} src={src} alt={name} />
        <h5 className={styles.name}>{name}</h5>
      </div>
    </li>
  );
};

export default TechnologiesItem;
