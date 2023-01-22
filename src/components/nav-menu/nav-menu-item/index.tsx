import styles from './menu-item.module.sass';
import { Link, animateScroll as scroll } from 'react-scroll';
interface INavMenuItem {
  text: string;
  link: string;
}

const NavMenuItem = ({ text, link }: INavMenuItem) => {
  return (
    <li className={styles.item}>
      <Link to={link} smooth={true} duration={200}>
        {text}
      </Link>
    </li>
  );
};

export default NavMenuItem;
