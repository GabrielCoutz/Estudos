import React from "react";
import styles from "../styles/Categoria.module.scss";

const Categorias = () => {
  return (
    <section className={`${styles.categorias} container`}>
      <div className={`sectionName`}>
        <h1>Categories</h1>
        <p>See all</p>
      </div>
      <ul>
        <li className={styles.card}>
          <div></div>
          <span>Comedy</span>
        </li>
      </ul>
    </section>
  );
};

export default Categorias;
