import React from "react";
import styles from "../styles/module/myHr.module.css";

export default function MyHr() {
  return (
    <div className={styles.whole}>
      <hr className={styles.leftpart} />
      <div className={styles.rightpart} />
    </div>
  );
}
