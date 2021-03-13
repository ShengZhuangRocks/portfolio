import React from "react";
import styles from "../styles/module/myHr.module.css";
import styled from "styled-components";

const Hr = styled.div`
  &:hover {
    & hr {
      transition: flex 0.3s ease-in-out;
      flex: 0;
    }
  }
`;

export default function MyHr() {
  return (
    <Hr className={styles.whole}>
      <hr className={styles.leftpart} />
      <div className={styles.rightpart} />
    </Hr>
  );
}
