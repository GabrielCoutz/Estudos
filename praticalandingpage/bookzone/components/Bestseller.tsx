import React from "react";
import styles from "../styles/Bestseller.module.scss";
import Card from "./Card";

const bestSellers = [
  {
    id: 1,
    title: "The Botanist",
    author: "M. W. Craven",
    price: "$ 14.00",
  },
  {
    id: 2,
    title: "The Complete Sherlock...",
    author: "Sir Arthur Conan Doyle",
    price: "$ 12.00",
  },
  {
    id: 3,
    title: "Harry Potter and the ...",
    author: "Dana Chambers",
    price: "$ 18.00",
  },
  {
    id: 4,
    title: "Holy Waters Searching ...",
    author: "Tom Morton",
    price: "$ 15.12",
  },
];

const Bestseller = () => {
  return (
    <section className={`${styles.bestSeller} container`}>
      <div className="sectionName">
        <h1>Bestseller</h1>
        <span>See all</span>
      </div>
      <ul className={styles.cards}>
        {bestSellers.map(({ id, title, author, price }) => (
          <Card author={author} price={price} title={title} key={id} />
        ))}
      </ul>
    </section>
  );
};

export default Bestseller;
