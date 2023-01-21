import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StevenKyritsisPage = () => {
  return (
    <>
      <MetaTags title="StevenKyritsis" description="StevenKyritsis page" />

      <h1>StevenKyritsisPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StevenKyritsisPage/StevenKyritsisPage.js</code>
      </p>
      <p>
        My default route is named <code>stevenKyritsis</code>, link to me with `
        <Link to={routes.stevenKyritsis()}>StevenKyritsis</Link>`
      </p>
    </>
  )
}

export default StevenKyritsisPage
