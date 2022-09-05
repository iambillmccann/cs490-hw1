import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SnehakaflePage = () => {
  return (
    <>
      <MetaTags title="Snehakafle" description="Snehakafle page" />

      <h1>SnehakaflePage</h1>
      <p>
        Find me in <code>./web/src/pages/SnehakaflePage/SnehakaflePage.js</code>
      </p>
      <p>
        My default route is named <code>snehakafle</code>, link to me with `
        <Link to={routes.snehakafle()}>Snehakafle</Link>`
      </p>
    </>
  )
}

export default SnehakaflePage
