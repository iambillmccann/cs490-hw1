import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DhyeypatelPage = () => {
  return (
    <>
      <MetaTags title="Dhyeypatel" description="Dhyeypatel page" />

      <h1>DhyeypatelPage</h1>
      <p>
        Find me in <code>./web/src/pages/DhyeypatelPage/DhyeypatelPage.js</code>
      </p>
      <p>
        My default route is named <code>dhyeypatel</code>, link to me with `
        <Link to={routes.dhyeypatel()}>Dhyeypatel</Link>`
      </p>
    </>
  )
}

export default DhyeypatelPage
