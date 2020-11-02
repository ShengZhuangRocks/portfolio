import React from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function NavLinks({ name, ...props }) {
  return (
    <>
      <span style={{ marginRight: "10px" }}>|</span>
      <Link href={`/${name}`}>
        <a className={styles.navlink}>{name}</a>
      </Link>
    </>
  );
}
