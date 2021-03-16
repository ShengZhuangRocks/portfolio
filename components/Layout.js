import Head from "next/head";
import Navbar from "./Navbar";
import FloatBar from "./FloatBar";
import ToTopButton from "./ToTopButton";
import styled from "styled-components";
import Infobar from "./Infobar";
import PoppuMenu from "./PopupMenu";
import { useState } from "react";

const H = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 75px auto 0 auto;
  min-height: calc(100vh - 75px - 68px);
  @media (max-width: 768px) {
    padding: 0 20px;
    margin-top: 20px;
  }
`;

const Fiv = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  @media (max-width: 768px) {
    position: relative;
  }
`;

const Footer = styled.div`
  font-family: "Cedarville Cursive", cursive;
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  padding: 15px;
`;

const Fulldiv = styled.div`
  width: 100%;
`;

const Layout = ({ children, pageTitle, description, ...props }) => {
  const [isClosed, setClosed] = useState(true);
  const siteName = "Sheng Zhuang's blog";
  const currentUrl = "";
  const twitterHandle = "@ZhuangSh";
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        {/* open graph */}
        <meta property="og:url" content={currentUrl} key="ogurl" />
        <meta property="og:site_name" content={siteName} key="ogurl" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        {/* twitter */}
        <meta name="twitter:card" content="sumary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
        <title>{pageTitle}</title>
      </Head>
      <div>
        <Fiv>
          <Navbar handler={setClosed} />
          <Infobar />
        </Fiv>
        <PoppuMenu
          links="projects blogs contact"
          isClosed={isClosed}
          handler={setClosed}
        />
        <H>{children}</H>
        {/* <FloatBar /> */}
        <ToTopButton />
        <Footer>Built by Sheng with ❤️️, @Copyright 2021-2022</Footer>
      </div>
    </>
  );
};

export default Layout;
