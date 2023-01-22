import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SeanUlepPage = () => {
  return (
    <>
      <MetaTags title="SeanUlep" description="SeanUlep page" />

      <h1>SeanUlepPage</h1>
      <p>
        Find me in <code>./web/src/pages/SeanUlepPage/SeanUlepPage.js</code>
      </p>
      <p>
        My default route is named <code>seanUlep</code>, link to me with `
        <Link to={routes.seanUlep()}>SeanUlep</Link>`
      </p>
    </>
  )
}

export default SeanUlepPage
