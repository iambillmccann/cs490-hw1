import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ZacharymullPage = () => {
  return (
    <>
      <MetaTags title="Zacharymull" description="Zacharymull page" />

      <h1>ZacharymullPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ZacharymullPage/ZacharymullPage.js</code>
      </p>
      <p>
        My default route is named <code>zacharymull</code>, link to me with `
        <Link to={routes.zacharymull()}>Zacharymull</Link>`
      </p>
    </>
  )
}

export default ZacharymullPage
