import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const VrajshahPage = () => {
  return (
    <>
      <MetaTags title="Vrajshah" description="Vrajshah page" />

      <h1>VrajshahPage</h1>
      <p>
        Find me in <code>./web/src/pages/VrajshahPage/VrajshahPage.js</code>
      </p>
      <p>
        My default route is named <code>vrajshah</code>, link to me with `
        <Link to={routes.vrajshah()}>Vrajshah</Link>`
      </p>
    </>
  )
}

export default VrajshahPage
