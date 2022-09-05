import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EdendubrovskyPage = () => {
  return (
    <>
      <MetaTags title="Edendubrovsky" description="Edendubrovsky page" />

      <h1>EdendubrovskyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EdendubrovskyPage/EdendubrovskyPage.js</code>
      </p>
      <p>
        My default route is named <code>edendubrovsky</code>, link to me with `
        <Link to={routes.edendubrovsky()}>Edendubrovsky</Link>`
      </p>
    </>
  )
}

export default EdendubrovskyPage
