import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MehulpatelPage = () => {
  return (
    <>
      <MetaTags title="Mehulpatel" description="Mehulpatel page" />

      <h1>MehulpatelPage</h1>
      <p>
        Find me in <code>./web/src/pages/MehulpatelPage/MehulpatelPage.js</code>
      </p>
      <p>
        My default route is named <code>mehulpatel</code>, link to me with `
        <Link to={routes.mehulpatel()}>Mehulpatel</Link>`
      </p>
    </>
  )
}

export default MehulpatelPage
