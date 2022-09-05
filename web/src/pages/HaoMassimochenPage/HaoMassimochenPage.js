import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HaoMassimochenPage = () => {
  return (
    <>
      <MetaTags title="HaoMassimochen" description="HaoMassimochen page" />

      <h1>HaoMassimochenPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/HaoMassimochenPage/HaoMassimochenPage.js</code>
      </p>
      <p>
        My default route is named <code>haoMassimochen</code>, link to me with `
        <Link to={routes.haoMassimochen()}>HaoMassimochen</Link>`
      </p>
    </>
  )
}

export default HaoMassimochenPage
