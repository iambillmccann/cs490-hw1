import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BrunomotaPage = () => {
  return (
    <>
      <MetaTags title="Brunomota" description="Brunomota page" />

      <h1>BrunomotaPage</h1>
      <p>
        Find me in <code>./web/src/pages/BrunomotaPage/BrunomotaPage.js</code>
      </p>
      <p>
        My default route is named <code>brunomota</code>, link to me with `
        <Link to={routes.brunomota()}>Brunomota</Link>`
      </p>
    </>
  )
}

export default BrunomotaPage
