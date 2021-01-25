import Head from 'next/head'
import db from '../../../db.json'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>{db.title}</title>
        <meta property="og:image" content={db.bg} key={db.title} />
      </Head>
    </div>
  )
}

export default IndexPage