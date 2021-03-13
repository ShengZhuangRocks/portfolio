import Head from "next/head";
import Navbar from "./Navbar";
import FloatBar from "./FloatBar";
import ToTopButton from "./ToTopButton";
import styled from "styled-components";
import Infobar from "./Infobar";

const H = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 64px auto 0 auto;
  min-height: calc(100vh - 64px - 38px - 20px);
`;

const Fiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Footer = styled.div`
  font-family: "Cedarville Cursive", cursive;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 20px auto;
`;

const Layout = ({ children, pageTitle, ...props }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Fiv>
        <Navbar />
        <Infobar />
      </Fiv>
      <H>{children}</H>
      {/* <FloatBar /> */}
      <ToTopButton />
      <Footer>Built by Sheng with ❤️️, @Copyright 2021-2022</Footer>
    </>
  );
};

export default Layout;
