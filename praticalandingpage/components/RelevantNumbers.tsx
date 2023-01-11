import React from "react";
import styles from "../styles/RelevantNumbers.module.scss";

const RelevantNumbers = () => {
  return (
    <section className={`${styles.relevantNumbers} container`}>
      <ul className={styles.numbersList}>
        <li>
          <h1>17.237</h1>
          <span>Happy customers</span>
        </li>
        <li>
          <h1>16.728</h1>
          <span>Total books</span>
        </li>
        <li>
          <h1>1.287</h1>
          <span>Authors</span>
        </li>
        <li>
          <h1>1.287</h1>
          <span>Books sold</span>
        </li>
      </ul>
    </section>
  );
};

export default RelevantNumbers;
