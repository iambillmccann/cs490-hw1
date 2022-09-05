import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NicolasoberholtzerPage = () => {
  return (
    <>
      <MetaTags
        title="Nicolasoberholtzer"
        description="Nicolasoberholtzer page"
      />

      <h1>NicolasoberholtzerPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/NicolasoberholtzerPage/NicolasoberholtzerPage.js
        </code>
      </p>
      <p>
        My default route is named <code>nicolasoberholtzer</code>, link to me
        with `<Link to={routes.nicolasoberholtzer()}>Nicolasoberholtzer</Link>`
      </p>
    </>
  )
}

export default NicolasoberholtzerPage
