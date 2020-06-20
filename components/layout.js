import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Ayman Alqoqa";
export const siteTitle = "Eng. Ayman Alqoqa";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ayman Alqoqa cv" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <p className={`${utilStyles.headingSm} ${utilStyles.flex}`}>
              <span className={utilStyles.margin5pxRight}>
                Email:{" "}
                <a href="mailto: aalqouqa@gmail.com">aalqouqa@gmail.com</a>
              </span>
              |
              <span className={utilStyles.margin5pxLeft}>
                GitHub:{" "}
                <a href="https://github.com/AymanAlqoqa" target="_blank">
                  AymanAlqoqa
                </a>
              </span>
            </p>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home ? (
        <div className={`${styles.backToHome}`}>
          <Link href="/">
            <a>&#8592; Back to home</a>
          </Link>
        </div>
      ) : (
        <div className={` ${utilStyles.alignRight}`}>
          <Link href="/projects">
            <a>Sample Projects &#8594;</a>
          </Link>
        </div>
      )}
    </div>
  );
}
