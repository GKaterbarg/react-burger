import React, { ReactElement } from 'react';
import { Logo, LogoutIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Menu } from './menu';
import { NavigationItem } from './navigation-item';
import styles from './app.header.module.css';

export const AppHeader = (): ReactElement => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Menu />
        <Logo />
        <NavigationItem Icon={LogoutIcon} text='Личный кабинет' disabled={true} />
      </nav>
    </header>
  );
};
