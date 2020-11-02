import React from "react";
import styles from "../styles/module/toTopButton.module.css";

export default function ToTopButton() {
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <button
      className={styles.button}
      onClick={() => moveToTop()}
      title="Go to top"
    >
      <i aria-hidden className="fas fa-angle-double-up"></i>
    </button>
  );
}
