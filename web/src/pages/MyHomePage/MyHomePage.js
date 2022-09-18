import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyHomePage = () => {
  return (
    <>
      <MetaTags title="MyHome" description="MyHome page" />

      <h1>MyHomePage</h1>
      <p>
        Find me in <code>./web/src/pages/MyHomePage/MyHomePage.js</code>
      </p>
      <p>
        My default route is named <code>myHome</code>, link to me with `
        <Link to={routes.myHome()}>MyHome</Link>`
      </p>
    </>
  )
}

export default MyHomePage
