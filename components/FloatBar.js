import React from "react";
import styles from "../styles/Layout.module.css";

function FaBlock({ faName, link }) {
  return (
    <a href={link}>
      <i
        aria-hidden
        className={faName}
        style={{ display: "block", marginBottom: "15px" }}
      />
    </a>
  );
}

export default function FloatBar() {
  return (
    <div className={styles.verticalBar}>
      <FaBlock faName="fab fa-twitter" link="https://twitter.com/ZhuangSh" />
      <FaBlock
        faName="fab fa-github"
        link="https://github.com/ShengZhuangRocks"
      />
      <FaBlock faName="fab fa-linkedin" link="" />
      <FaBlock
        faName="fas fa-envelope-square"
        link="mailto:shengzh9@gmail.com"
      />
    </div>
  );
}
