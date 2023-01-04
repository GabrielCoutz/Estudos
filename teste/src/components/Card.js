import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/product/${item.default_price}`}>
            <Image
              src={item.images[0]}
              width={300}
              alt="xampson"
              height={300}
            />
          </Link>
          <h3>{item.name}</h3>
        </li>
      ))}
    </>
  );
};

export default Card;
