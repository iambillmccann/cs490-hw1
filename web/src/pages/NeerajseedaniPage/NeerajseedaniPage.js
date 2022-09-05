import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NeerajseedaniPage = () => {
  return (
    <>
      <MetaTags title="Neerajseedani" description="Neerajseedani page" />

      <h1>NeerajseedaniPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NeerajseedaniPage/NeerajseedaniPage.js</code>
      </p>
      <p>
        My default route is named <code>neerajseedani</code>, link to me with `
        <Link to={routes.neerajseedani()}>Neerajseedani</Link>`
      </p>
    </>
  )
}

export default NeerajseedaniPage
