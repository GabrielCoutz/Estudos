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
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "#FC490B",
    },
    visible: {
      pathLength: 1,
      fill: "#fff",
    },
  };

  return (
    <div className={styles.motion}>
      <svg
        width="100"
        height="90"
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M100 44.5373C100 37.9128 91.704 31.6347 78.9849 27.7415C81.9201 14.7778 80.6156 4.46392 74.8675 1.16184C73.5426 0.38728 71.9935 0.0203829 70.3017 0.0203829V4.56584C71.2393 4.56584 71.9935 4.74929 72.6254 5.0958C75.3975 6.68569 76.6001 12.7395 75.6625 20.5259C75.4382 22.4419 75.0713 24.4598 74.6229 26.5185C70.6278 25.5402 66.2658 24.786 61.6796 24.2968C58.9278 20.5259 56.0742 17.1015 53.2002 14.1052C59.8451 7.92907 66.0824 4.54545 70.3221 4.54545V0C64.7167 0 57.3787 3.99511 49.9592 10.9254C42.5397 4.03588 35.2018 0.0815331 29.5964 0.0815331V4.62699C33.8157 4.62699 40.0734 7.99022 46.7183 14.1256C43.8647 17.1219 41.011 20.5259 38.3 24.2968C33.6934 24.786 29.3314 25.5402 25.3363 26.5389C24.8675 24.5006 24.521 22.5234 24.2764 20.6278C23.3184 12.8414 24.5006 6.78761 27.2523 5.17733C27.8638 4.81044 28.6588 4.64737 29.5964 4.64737V0.101916C27.8842 0.101916 26.3351 0.468813 24.9898 1.24338C19.2621 4.54545 17.978 14.839 20.9335 27.7619C8.2552 31.6755 0 37.9331 0 44.5373C0 51.1618 8.29596 57.4399 21.0151 61.3331C18.0799 74.2968 19.3844 84.6107 25.1325 87.9128C26.4574 88.6873 28.0065 89.0542 29.7187 89.0542C35.3241 89.0542 42.662 85.0591 50.0815 78.1288C57.501 85.0183 64.839 88.9727 70.4444 88.9727C72.1565 88.9727 73.7057 88.6058 75.051 87.8312C80.7786 84.5291 82.0628 74.2356 79.1072 61.3127C91.7448 57.4195 100 51.1415 100 44.5373ZM73.4611 30.9417C72.7069 33.5711 71.7693 36.2821 70.7093 38.9931C69.8736 37.3624 68.9971 35.7318 68.0391 34.1011C67.1015 32.4704 66.1027 30.8806 65.104 29.3314C67.9984 29.7595 70.7909 30.2894 73.4611 30.9417ZM64.1256 52.6498C62.5357 55.4015 60.905 58.0106 59.2132 60.4362C56.1761 60.7012 53.0982 60.8439 50 60.8439C46.9221 60.8439 43.8443 60.7012 40.8276 60.4566C39.1358 58.031 37.4847 55.4423 35.8948 52.711C34.3457 50.0408 32.9393 47.3298 31.6551 44.5984C32.9189 41.8671 34.3457 39.1357 35.8744 36.4655C37.4643 33.7138 39.095 31.1048 40.7868 28.6792C43.8239 28.4142 46.9018 28.2715 50 28.2715C53.0779 28.2715 56.1557 28.4142 59.1724 28.6588C60.8642 31.0844 62.5153 33.6731 64.1052 36.4044C65.6543 39.0746 67.0607 41.7856 68.3449 44.5169C67.0607 47.2483 65.6543 49.9796 64.1256 52.6498ZM70.7093 50C71.81 52.7313 72.7477 55.4627 73.5222 58.1125C70.852 58.7648 68.0391 59.3151 65.1243 59.7432C66.1231 58.1737 67.1219 56.5634 68.0595 54.9123C68.9972 53.2817 69.8736 51.6306 70.7093 50ZM50.0408 71.7489C48.1451 69.7921 46.2495 67.6111 44.3742 65.2262C46.2087 65.3078 48.084 65.3689 49.9796 65.3689C51.8956 65.3689 53.7913 65.3282 55.6461 65.2262C53.8117 67.6111 51.916 69.7921 50.0408 71.7489ZM34.8757 59.7432C31.9812 59.3151 29.1887 58.7852 26.5185 58.1329C27.2727 55.5035 28.2104 52.7925 29.2703 50.0815C30.106 51.7122 30.9825 53.3428 31.9405 54.9735C32.8985 56.6042 33.8769 58.194 34.8757 59.7432ZM49.9389 17.3257C51.8345 19.2825 53.7301 21.4635 55.6054 23.8483C53.7709 23.7668 51.8956 23.7057 50 23.7057C48.084 23.7057 46.1883 23.7464 44.3335 23.8483C46.168 21.4635 48.0636 19.2825 49.9389 17.3257ZM34.8553 29.3314C33.8565 30.9009 32.8577 32.5112 31.9201 34.1623C30.9825 35.7929 30.106 37.4236 29.2703 39.0542C28.1696 36.3229 27.232 33.5915 26.4574 30.9417C29.1276 30.3098 31.9405 29.7595 34.8553 29.3314ZM16.4085 54.8512C9.19283 51.7733 4.52507 47.7375 4.52507 44.5373C4.52507 41.3371 9.19283 37.2809 16.4085 34.2234C18.1614 33.4692 20.0775 32.7966 22.0546 32.1647C23.2165 36.1598 24.7452 40.318 26.6408 44.5781C24.7656 48.8178 23.2572 52.9556 22.1158 56.9303C20.0978 56.2984 18.1818 55.6054 16.4085 54.8512ZM27.3746 83.9788C24.6025 82.3889 23.3999 76.3351 24.3375 68.5487C24.5618 66.6327 24.9287 64.6148 25.3771 62.556C29.3722 63.5344 33.7342 64.2886 38.3204 64.7778C41.0722 68.5487 43.9258 71.9731 46.7998 74.9694C40.1549 81.1455 33.9177 84.5291 29.6779 84.5291C28.7607 84.5088 27.9861 84.3253 27.3746 83.9788ZM75.7236 68.4468C76.6816 76.2332 75.4994 82.287 72.7477 83.8973C72.1362 84.2642 71.3412 84.4272 70.4036 84.4272C66.1843 84.4272 59.9266 81.064 53.2817 74.9287C56.1353 71.9323 58.989 68.5283 61.7 64.7574C66.3066 64.2682 70.6686 63.5141 74.6637 62.5153C75.1325 64.574 75.4994 66.5512 75.7236 68.4468ZM83.5711 54.8512C81.8182 55.6054 79.9022 56.278 77.925 56.9099C76.7631 52.9148 75.2344 48.7566 73.3388 44.4965C75.214 40.2568 76.7224 36.119 77.8638 32.1443C79.8818 32.7762 81.7978 33.4692 83.5915 34.2234C90.8072 37.3013 95.4749 41.3371 95.4749 44.5373C95.4545 47.7375 90.7868 51.7937 83.5711 54.8512Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            visible: { duration: 2, ease: "easeInOut" },
            hidden: { duration: 2 },
          }}
        />
        <motion.path
          d="M49.9797 53.8524C55.1243 53.8524 59.2948 49.6819 59.2948 44.5373C59.2948 39.3927 55.1243 35.2222 49.9797 35.2222C44.8351 35.2222 40.6646 39.3927 40.6646 44.5373C40.6646 49.6819 44.8351 53.8524 49.9797 53.8524Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            visible: { duration: 2, ease: [1, 0, 0.8, 1] },
            hidden: { duration: 2 },
          }}
        />
      </svg>
    </div>
  );
}