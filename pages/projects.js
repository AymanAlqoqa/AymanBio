import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Projects() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h2>Sample Projects</h2>
        <ul>
          <li>
            <a href="https://to-gether.herokuapp.com/" target="_blank">
              Work Together : Freelance platform for south Londoners.
            </a>
          </li>
          <li>
            <a href="https://logicteca-v1.herokuapp.com/" target="_blank">
              Logicteca : Manage projects scrums and tasks.
            </a>
          </li>
          <li>
            <a
              href="https://condescending-dijkstra-8f43d2.netlify.app/"
              target="_blank"
            >
              G6 Students : Presents code academy cohort 6 profile and students’
              progress.
            </a>
          </li>
          <li>
            <a href="https://leannky-anty.herokuapp.com/" target="_blank">
              Leannky-Anty : Takes care of women wrights.
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
