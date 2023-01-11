import React from "react";
import styles from "../styles/Categoria.module.scss";

const Categorias = () => {
  return (
    <section className={`${styles.categorias} container`}>
      <div className={`sectionName`}>
        <h1>Categories</h1>
        <p>See all</p>
      </div>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <div className={styles.image}></div>
          <span>Comedy</span>
        </li>
        <li className={styles.card}>
          <div className={styles.image}></div>
          <span>Romantic</span>
        </li>
        <li className={styles.card}>
          <div className={styles.image}></div>
          <span>Fantasy</span>
        </li>
      </ul>
    </section>
  );
};

export default Categorias;
