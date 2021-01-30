/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import db from '../../../db.json';

function PageHead() {
  return (
    <Head>
      <title>{db.title}</title>
      <meta property="og:image" content={db.bg} key={db.title} />
    </Head>
  );
}

export default PageHead;
