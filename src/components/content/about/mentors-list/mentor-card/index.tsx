import React from 'react';
import styles from './mentor-card.module.sass';

interface IMentorsCard {
  name: string;
  position: string;
  src: string;
}

const MentorCard = ({ name, position, src }: IMentorsCard) => {
  return (
    <li className={styles.card}>
      <div className={styles.wrapPhoto}>
        <img className={styles.photo} src={src} alt={name} />
      </div>
      <h5 className={styles.name}>{name}</h5>
      <p className={styles.position}>{position}</p>
    </li>
  );
};

export default MentorCard;
