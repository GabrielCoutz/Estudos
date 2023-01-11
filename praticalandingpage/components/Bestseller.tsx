import React from "react";
import Heart from "../assets/Heart";
import ShoppingBag from "../assets/ShoppingBag";
import styles from "../styles/Bestseller.module.scss";

const Bestseller = () => {
  return (
    <section className={`${styles.bestSeller} container`}>
      <div className="sectionName">
        <h1>Bestseller</h1>
        <span>See all</span>
      </div>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <div className={styles.wrapperImage}>
            <div className={styles.image}></div>
          </div>
          <h3 className={styles.title}>The Botanist</h3>
          <span className={styles.author}>M. W. Craven</span>
          <span className={styles.price}>$ 14.00</span>
          <div className={styles.buttons}>
            <ShoppingBag />
            <Heart />
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.wrapperImage}>
            <div className={styles.image}></div>
          </div>
          <h3 className={styles.title}>The Complete Sherlock...</h3>
          <span className={styles.author}>Sir Arthur Conan Doyle</span>
          <span className={styles.price}>$ 12.00</span>
          <div className={styles.buttons}>
            <ShoppingBag />
            <Heart />
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.wrapperImage}>
            <div className={styles.image}></div>
          </div>
          <h3 className={styles.title}>Harry Potter and the ...</h3>
          <span className={styles.author}>Dana Chambers</span>
          <span className={styles.price}>$ 18.00</span>
          <div className={styles.buttons}>
            <ShoppingBag />
            <Heart />
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.wrapperImage}>
            <div className={styles.image}></div>
          </div>
          <h3 className={styles.title}>Holy Waters Searching ...</h3>
          <span className={styles.author}>Tom Morton</span>
          <span className={styles.price}>$ 15.12</span>
          <div className={styles.buttons}>
            <ShoppingBag />
            <Heart />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Bestseller;
