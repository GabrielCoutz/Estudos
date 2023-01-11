import React from "react";
import Heart from "../assets/Heart";
import ShoppingBag from "../assets/ShoppingBag";
import styles from "../styles/Card.module.scss";

interface CardModel {
  title: string;
  author: string;
  price: string;
}

const Card = ({ title, author, price }: CardModel) => {
  return (
    <li className={styles.card}>
      <div className={styles.wrapperImage}>
        <div className={styles.image}></div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.author}>{author}</span>
      <span className={styles.price}>{price}</span>
      <div className={styles.buttons}>
        <ShoppingBag />
        <Heart />
      </div>
    </li>
  );
};

export default Card;
