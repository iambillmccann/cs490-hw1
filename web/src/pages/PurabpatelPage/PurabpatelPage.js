import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PurabpatelPage = () => {
  return (
    <>
      <MetaTags title="Purabpatel" description="Purabpatel page" />

      <h1>PurabpatelPage</h1>
      <p>
        Find me in <code>./web/src/pages/PurabpatelPage/PurabpatelPage.js</code>
      </p>
      <p>
        My default route is named <code>purabpatel</code>, link to me with `
        <Link to={routes.purabpatel()}>Purabpatel</Link>`
      </p>
      <p>This is my change to my JavaScript File</p>
    </>
  )
}

export default PurabpatelPage
