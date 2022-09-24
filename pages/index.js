import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

export async function getStaticProps() {
  const allPostsData = getPostsData();
  // console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Next.js.blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>私はよわエンジニアです。少しでもつよくなるように奮闘中( ◠‿◠ )</p>
      </section>
      <section>
        <h2>📝よわエンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, thumbnail, date }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
