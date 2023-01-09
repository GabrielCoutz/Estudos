import React from "react";
import styles from "../styles/Header.module.scss";
import Heart from "../assets/Heart";
import Bag from "../assets/ShoppingBag";
import User from "../assets/User";

const Header = () => {
  return (
    <div className={styles.wrapperContainer}>
      <header className={`${styles.header} container`}>
        <h1>
          B<span className={styles.detalhe}>oo</span>kzone
        </h1>
        <nav>
          <ul className={styles.nav}>
            <li>Category</li>
            <li>Bestseller</li>
            <li>Special for you</li>
            <li>Other</li>
          </ul>
        </nav>

        <ul className={styles.icons}>
          <li>
            <Heart />
          </li>
          <li>
            <Bag />
          </li>
          <li>
            <User />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
