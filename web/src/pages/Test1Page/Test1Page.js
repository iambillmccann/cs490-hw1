import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Test1Page = () => {
  return (
    <>
      <MetaTags title="Test1" description="Test1 page" />

      <h1>Test1Page</h1>
      <p>
        Find me in <code>./web/src/pages/Test1Page/Test1Page.js</code>
      </p>
      <p>
        My default route is named <code>test1</code>, link to me with `
        <Link to={routes.test1()}>Test1</Link>`
      </p>
    </>
  )
}

export default Test1Page
