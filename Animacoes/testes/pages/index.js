import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import styles from "./index.module.css";

const variants = {
  default: {
    opacity: 0,
    scale: 0,
  },
  active: {
    opacity: 1,
    scale: 1,
  },
};

export default function Home() {
  const [active, setActive] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <motion.div style={{ scale }} className={styles.motion}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </motion.div>
    </>
  );
}
