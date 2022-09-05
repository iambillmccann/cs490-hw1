import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EvelyngarciaMendozaPage = () => {
  return (
    <>
      <MetaTags
        title="EvelyngarciaMendoza"
        description="EvelyngarciaMendoza page"
      />

      <h1>EvelyngarciaMendozaPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/EvelyngarciaMendozaPage/EvelyngarciaMendozaPage.js
        </code>
      </p>
      <p>
        My default route is named <code>evelyngarciaMendoza</code>, link to me
        with `<Link to={routes.evelyngarciaMendoza()}>EvelyngarciaMendoza</Link>
        `
      </p>
    </>
  )
}

export default EvelyngarciaMendozaPage
