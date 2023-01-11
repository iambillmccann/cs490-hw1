import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Test2Page = () => {
  return (
    <>
      <MetaTags title="Test2" description="Test2 page" />

      <h1>Test2Page</h1>
      <p>
        Find me in <code>./web/src/pages/Test2Page/Test2Page.js</code>
      </p>
      <p>
        My default route is named <code>test2</code>, link to me with `
        <Link to={routes.test2()}>Test2</Link>`
      </p>
    </>
  )
}

export default Test2Page
