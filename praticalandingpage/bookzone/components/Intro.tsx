import React from "react";
import Search from "../assets/Search";
import styles from "../styles/Intro.module.scss";

const Intro = () => {
  return (
    <>
      <main className={`${styles.intro} container`}>
        <h1>
          A book is a <br />
          portrait of truth
        </h1>
        <div className={styles.searchBox}>
          <Search />
          <input type="text" placeholder="Looking for a book" />
          <button>{">"}</button>
        </div>
      </main>
      <div className={styles.faixaWrapper}>
        <div className={`${styles.faixa}`}>
          <div className={styles.faixaBg}></div>
          <span>New Books</span>
          <span>New Books</span>
          <span>New Books</span>
          <span>New Books</span>
          <span>New Books</span>
          <span>New Books</span>
          <span>New Books</span>
          <span>New Books</span>
        </div>
      </div>
    </>
  );
};

export default Intro;