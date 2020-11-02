import React from "react";
import Layout from "../components/Layout";
import MyHr from "../components/MyHr";

export default function Contact() {
  return (
    <Layout pageTitle="Sheng Zhuang's contact" description="Sheng's portfolio">
      <main>
        <table>
          <tr>
            <td>Email:</td>
            <td>
              <a
                href="mailto: shengzh9@gmail.com"
                style={{ textDecoration: "underline" }}
              >
                shengzh9@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Github:</td>
            <td>
              <a
                href="https://github.com/ShengZhuangRocks"
                style={{ textDecoration: "underline" }}
              >
                ShengZhuangRocks
              </a>
            </td>
          </tr>
          <tr>
            <td>StackOverflow:</td>
            <td>
              <a
                href="https://stackoverflow.com/users/12297125/sheng-zhuang"
                style={{ textDecoration: "underline" }}
              >
                https://stackoverflow.com/users/12297125/sheng-zhuang
              </a>
            </td>
          </tr>
        </table>
      </main>
    </Layout>
  );
}
