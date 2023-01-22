import { NavMenuType } from '../../types/enums';
import NavMenuItem from './nav-menu-item';
import styles from './nav-menu.module.sass';

const headerList = [
  { text: 'About', link: 'about' },
  { text: 'Programs', link: 'technologies' },
  { text: 'Steps', link: 'steps' },
  { text: 'Questions', link: 'questions' },
  { text: 'Get in touch', link: 'contact' },
];

const footerList = [
  { text: 'About Us', link: 'about' },
  { text: 'Steps', link: 'steps' },
  { text: 'FAQ', link: 'questions' },
  { text: 'Review', link: 'review' },
  { text: 'Gallary', link: 'gallery' },
];

interface NavMenu {
  type: NavMenuType;
}

const NavMenu = ({ type }: NavMenu) => {
  const list = type === NavMenuType.header ? headerList : footerList;
  return (
    <nav>
      <ul className={`${styles.list} ${styles[type]}`}>
        {list.map((item) => (
          <NavMenuItem key={item.text} text={item.text} link={item.link} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
