import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RicardosierraPage = () => {
  return (
    <>
      <MetaTags title="Ricardosierra" description="Ricardosierra page" />

      <h1>RicardosierraPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RicardosierraPage/RicardosierraPage.js</code>
      </p>
      <p>
        My default route is named <code>ricardosierra</code>, link to me with `
        <Link to={routes.ricardosierra()}>Ricardosierra</Link>`
      </p>
    </>
  )
}

export default RicardosierraPage
