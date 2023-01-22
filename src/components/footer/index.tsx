import React from 'react';
import { NavMenuType } from '../../types/enums';
import { Icon, nameIcons } from '../icons';
import NavMenu from '../nav-menu';
import styles from './footer.module.sass';

const socialList: nameIcons[] = ['fb', 'git', 'twitter', 'linkedin'];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.addressContainer}>
          <img className={styles.logo} src="img/logo.png" alt="logo" />
          <address className={styles.address}>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</address>
        </div>
        <div className={styles.navContainer}>
          <span className={styles.nameList}>Company</span>
          <NavMenu type={NavMenuType.footer} />
        </div>
        <div className={styles.socialContainer}>
          <span className={styles.nameList}>Social media</span>
          <ul className={styles.socialList}>
            {socialList.map((item) => (
              <Icon key={item} name={item} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
