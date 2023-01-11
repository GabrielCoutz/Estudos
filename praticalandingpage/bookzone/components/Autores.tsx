import React from "react";
import Heart from "../assets/Heart";
import ShoppingBag from "../assets/ShoppingBag";
import styles from "../styles/Autores.module.scss";

const createAuthorTag = (name: string, index: number) => {
  return (
    <li key={index}>
      <div className={styles.image}></div>
      <span>{name}</span>
    </li>
  );
};

const authors = [
  "Stuart Douglas",
  "Edgar Allan Poe",
  "Lev Tolstoy",
  "Arthur Gonzalez",
  "Ernesto Wade",
  "Georgia Ramirez",
  "Jessica Munoz",
  "Marcella Bennett",
  "Tricia Alison",
  "Simon Kurt Unsworth",
  "Simon Booker",
  "Val McDermid",
];

const Autores = () => {
  return (
    <section className={`${styles.autores} container`}>
      <div className={styles.authorsList}>
        <ul>{authors.map(createAuthorTag)}</ul>
      </div>
      <div className={styles.authorBooks}>
        <div className="sectionName">
          <h1>Authors book</h1>
          <span>See all</span>
        </div>
        <ul className={styles.bookList}>
          <li>
            <div className={styles.wrapperImage}>
              <div className={styles.image}></div>
              <div className={styles.buttons}>
                <ShoppingBag />
                <Heart />
              </div>
            </div>
            <div className={styles.info}>
              <h1>White Bird, Black Serpend, Red Book</h1>
              <span>Stuart Douglas</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nam saepe in laborum adipisci hic officiis veritatis accusamus,
                numquam tempora delectus maiores quibusdam praesentium
                reiciendis nisi sint perferendis tenetur quia?
              </p>
              <div className={styles.bottomInfo}>
                <span>$ 13.20</span>
                <button>Add to cart</button>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.wrapperImage}>
              <div className={styles.image}></div>
              <div className={styles.buttons}>
                <ShoppingBag />
                <Heart />
              </div>
            </div>
            <div className={styles.info}>
              <h1>
                The Further Adventures of Sherlock Holmes - Sherlock Holmes and
                the Crusader Curse
              </h1>
              <span>Rext Rios</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nam saepe in laborum adipisci hic officiis veritatis accusamus.
              </p>
              <div className={styles.bottomInfo}>
                <span>$ 19.73</span>
                <button>Add to cart</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Autores;
