import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ThomasbetheaPage = () => {
  return (
    <>
      <MetaTags title="Thomasbethea" description="Thomasbethea page" />

      <h1>ThomasbetheaPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ThomasbetheaPage/ThomasbetheaPage.js</code>
      </p>
      <p>
        My default route is named <code>thomasbethea</code>, link to me with `
        <Link to={routes.thomasbethea()}>Thomasbethea</Link>`
      </p>
    </>
  )
}

export default ThomasbetheaPage
