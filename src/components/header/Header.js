import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <>
    <header className={style.header}>
      <nav>
        <div className={style.navBox}>
          <NavLink
            exact
            to="/"
            className={style.navBtn}
            activeClassName={style.btnSearchActive}
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={style.navBtn}
            activeClassName={style.btnSearchActive}
          >
            Search
          </NavLink>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
