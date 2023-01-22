import React from 'react';
import { NavMenuType } from '../../types/enums';
import NavMenu from '../nav-menu';
import styles from './header.module.sass';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src="img/logo.png" alt="logo" />
        <NavMenu type={NavMenuType.header} />
      </div>
    </header>
  );
};

export default Header;
