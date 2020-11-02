import { getStaticProps } from "./blogs";
import Layout from "../components/Layout";
import MyHr from "../components/MyHr";
import Link from "next/link";

const About = () => {
  return (
    <Layout pageTitle="About Sheng Zhuang" description="Sheng's portfolio">
      <main>
        <h3>I am Sheng Zhuang</h3>
        <MyHr />
        <p>I am a freelance full stack web developer.</p>
        <p>I live in Brisbane, Queensland.</p>
        <p>
          I am right now looking for a job, feel free to{" "}
          <strong>
            <Link href={`/contact`}>
              <a>contact me</a>
            </Link>
          </strong>
        </p>
        <MyHr />
        <p>
          I am a fast learner and always curious about new technologies, that is
          a big reason that I switched to this career as wev developer.
        </p>
        <p>
          I used to work as an architect designer in a small team and a big
          corporation as well, I would say I am a team player.
        </p>
        <MyHr />
        <p>
          I like <i class="fas fa-hiking" /> hiking and{" "}
          <i class="fas fa-running" style={{ marginRight: "5px" }} />
          trail running
        </p>
      </main>
    </Layout>
  );
};

export default About;

// export async function getStaticProps() {
//   const configData = await import("../siteconfig.json");
//   return {
//     props: {
//       title: configData.default.title,
//       description: configData.default.description,
//     },
//   };
// }
