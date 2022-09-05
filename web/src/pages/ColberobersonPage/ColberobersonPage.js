import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ColberobersonPage = () => {
  return (
    <>
      <MetaTags title="Colberoberson" description="Colberoberson page" />

      <h1>ColberobersonPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ColberobersonPage/ColberobersonPage.js</code>
      </p>
      <p>
        My default route is named <code>colberoberson</code>, link to me with `
        <Link to={routes.colberoberson()}>Colberoberson</Link>`
      </p>
    </>
  )
}

export default ColberobersonPage
