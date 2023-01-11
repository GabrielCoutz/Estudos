import React from "react";
import Search from "../assets/Search";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.interprise}>
        <h1>
          B<span className={styles.detalhe}>oo</span>kzone
        </h1>
        <div className={styles.searchBox}>
          <Search />
          <input type="text" placeholder="Looking for a book" />
          <button>{">"}</button>
        </div>
      </div>

      <div className={styles.block}>
        <h1>Categories</h1>
        <ul>
          <li>All books</li>
          <li>Authors</li>
          <li>Audio books</li>
          <li>Bestseller</li>
        </ul>
      </div>

      <div className={styles.block}>
        <h1>Special for you</h1>
        <ul>
          <li>Book sets</li>
          <li>Discounted books</li>
          <li>New books</li>
          <li>Books of the year</li>
        </ul>
      </div>

      <div className={styles.block}>
        <h1>Special for you</h1>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Delivery</li>
          <li>Blog</li>
          <li>Events</li>
        </ul>
      </div>

      <div className={styles.block}>
        <h1>Social Media</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
