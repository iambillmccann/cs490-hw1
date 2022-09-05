import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LazaragoevPage = () => {
  return (
    <>
      <MetaTags title="Lazaragoev" description="Lazaragoev page" />

      <h1>LazaragoevPage</h1>
      <p>
        Find me in <code>./web/src/pages/LazaragoevPage/LazaragoevPage.js</code>
      </p>
      <p>
        My default route is named <code>lazaragoev</code>, link to me with `
        <Link to={routes.lazaragoev()}>Lazaragoev</Link>`
      </p>
    </>
  )
}

export default LazaragoevPage
