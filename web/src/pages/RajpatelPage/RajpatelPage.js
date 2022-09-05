import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RajpatelPage = () => {
  return (
    <>
      <MetaTags title="Rajpatel" description="Rajpatel page" />

      <h1>RajpatelPage</h1>
      <p>
        Find me in <code>./web/src/pages/RajpatelPage/RajpatelPage.js</code>
      </p>
      <p>
        My default route is named <code>rajpatel</code>, link to me with `
        <Link to={routes.rajpatel()}>Rajpatel</Link>`
      </p>
    </>
  )
}

export default RajpatelPage
