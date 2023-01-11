import React from "react";
import styles from "../styles/LivrosDetetives.module.scss";
import Card from "./Card";

const detectiveBooks = [
  {
    id: 4,
    title: "Detective",
    author: "Arthur Holley",
    price: "$ 20.00",
  },
  {
    id: 5,
    title: "Detective Angel",
    author: "Rye Harrison",
    price: "$ 23.00",
  },
  {
    id: 6,
    title: "2 Sisters Dective Agency",
    author: "James Patterson, Candice Fox",
    price: "$ 17.00",
  },
  {
    id: 7,
    title: "The Blitz Detective",
    author: "Mike Hollow",
    price: "$ 12.00",
  },
];

const LivrosDetetives = () => {
  return (
    <section className="container">
      <div className={`${styles.detectiveBooks} sectionName`}>
        <h1>Detective books</h1>
        <span>See all</span>
      </div>
      <ul className={styles.detectiveBooksList}>
        {detectiveBooks.map(({ id, price, title, author }) => (
          <Card author={author} price={price} title={title} key={id} />
        ))}
      </ul>
    </section>
  );
};

export default LivrosDetetives;
