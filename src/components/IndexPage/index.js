import Head from 'next/head'
import db from '../../../db.json'

function IndexPage() {
  return (
      <Head>
        <title>{db.title}</title>
        <meta property="og:image" content={db.bg} key={db.title} />
      </Head>
  )
}

export default IndexPage