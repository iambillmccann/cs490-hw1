import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SaivedagiriPage = () => {
  return (
    <>
      <MetaTags title="Saivedagiri" description="Saivedagiri page" />

      <h1>SaivedagiriPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SaivedagiriPage/SaivedagiriPage.js</code>
      </p>
      <p>
        My default route is named <code>saivedagiri</code>, link to me with `
        <Link to={routes.saivedagiri()}>Saivedagiri</Link>`
      </p>
    </>
  )
}

export default SaivedagiriPage
