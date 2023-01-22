import React from 'react';
import MentorCard from './mentor-card';
import styles from './mentors-list.module.sass';

const mentors = [
  {
    name: 'Wabe Warren',
    position: 'Front-end engineers work closely with designers',
    src: '/img/mentors/WadeWarren.jpg',
  },
  {
    name: 'Kristin Watson',
    position: 'Front-end engineers work closely with designers',
    src: '/img/mentors/KristinWatson.jpg',
  },
  {
    name: 'Robert Fox',
    position: 'Front-end engineers work closely with designers',
    src: '/img/mentors/RobertFox.jpg',
  },
];

const MentorsList = () => {
  return (
    <ul className={styles.mentorsList}>
      {mentors.map((item) => (
        <MentorCard key={item.name} name={item.name} position={item.position} src={item.src} />
      ))}
    </ul>
  );
};

export default MentorsList;
