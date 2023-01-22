import StepsCard from './steps-card';
import styles from './steps-list.module.sass';

const steps = [
  {
    id: 1,
    number: 1,
    name: 'Introduction to Front-End',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  },
  {
    id: 2,
    number: 2,
    name: 'Overview of Development',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  },
  {
    id: 3,
    number: 3,
    name: 'Introduction to Front-End',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  },
  {
    id: 4,
    number: 4,
    name: 'Overview of Development',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  },
  {
    id: 5,
    number: 5,
    name: 'Introduction to Front-End',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  },
  {
    id: 6,
    number: 6,
    name: 'Overview of Development',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  },
];

export const StepsList = () => {
  return (
    <ul className={styles.stepsList}>
      {steps.map((item) => (
        <StepsCard key={item.id} number={item.number} name={item.name} text={item.text} />
      ))}
    </ul>
  );
};

export default StepsList;
