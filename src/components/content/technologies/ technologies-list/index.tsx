import TechnologiesItem from './technologies-item';
import styles from './technologies-list.module.sass';

const technologies = [
  { id: 1, name: 'Angular', src: '/img/technologies/angular.png' },
  { id: 2, name: 'React', src: '/img/technologies/react.png' },
  { id: 3, name: 'Vue.js', src: '/img/technologies/vue.png' },
  { id: 4, name: 'JavaScript', src: '/img/technologies/js.jpg' },
];

const TechnologiesList = () => {
  return (
    <ul className={styles.technologiesList}>
      {technologies.map((item) => (
        <TechnologiesItem key={item.id} name={item.name} src={item.src} />
      ))}
    </ul>
  );
};

export default TechnologiesList;
