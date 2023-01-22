import styles from './content.module.sass';

interface IContent {
  children: React.ReactNode;
}

const Content = ({ children }: IContent) => {
  return <main className={styles.main}>{children}</main>;
};

export default Content;
