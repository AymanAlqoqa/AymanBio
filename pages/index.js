import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Full-Stack React Developer</p>
        <p className={utilStyles.paragraphJustify}>
          Full stack web developer specialized in single page application
          (react) and express back end server, in addition to Next React
          framework. Developed with my team many beneficial projects including a
          task/scrum manager platform which facilitates managing more than 20
          employees on middle size company. Another great project is
          work-together, a freelance working platform for south Londoners.
          <br />
          <br />
          <strong>Skills</strong>: Javascript (nodejs), Reactjs, Nextjs, Express
          server with handlebars, REST full api, Postgres sql databse, MongoDB,
          TDD testing, Agile methodology, Version control (git/github), Html5
          and css3.
          <strong>
            <i>Customer satisfaction is my goal</i>
          </strong>
        </p>
      </section>
    </Layout>
  );
}
