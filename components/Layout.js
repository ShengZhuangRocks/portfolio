import Head from "next/head";
import Header from "./Header";
import styles from "../styles/module/layout.module.css";
import FloatBar from "./FloatBar";
import ToTopButton from "./ToTopButton";

const Layout = ({ children, pageTitle, ...props }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <script
          src="https://kit.fontawesome.com/50ec7955dd.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className={styles.layout}>
        <Header />
        <div className={styles.content}>{children}</div>
        {/* <FloatBar /> */}
        <ToTopButton />
      </div>
      <footer>Built by Sheng, all about Sheng, @Copyright 2020</footer>
    </>
  );
};

export default Layout;
