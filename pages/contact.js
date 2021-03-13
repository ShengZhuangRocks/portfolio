import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const T = styled.table`
  padding-top: 30px;
`;

const Row = ({ title, link, content }) => (
  <tr>
    <td>{title}</td>
    <td>
      <a href={link}>{content}</a>
    </td>
  </tr>
);

export default function Contact() {
  return (
    <Layout pageTitle="Sheng Zhuang's contact" description="Sheng's portfolio">
      <T>
        <Row
          title="The other site"
          link="https://shengzhuang.vercel.app/"
          content="shengzhuang.vercel.app/"
        />
        <Row
          title="Email:"
          link="mailto: shengzh9@gmail.com"
          content="shengzh9@gmail.com"
        />
        <Row
          title="Github"
          link="https://github.com/ShengZhuangRocks"
          content="ShengZhuangRocks"
        />
        <Row
          title="StackOverflow:"
          link="https://stackoverflow.com/users/12297125/sheng-zhuang"
          content="https://stackoverflow.com/users/12297125/sheng-zhuang"
        />
      </T>
    </Layout>
  );
}
