import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AlonlernerPage = () => {
  return (
    <>
      <MetaTags title="Alonlerner" description="Alonlerner page" />

      <h1>AlonlernerPage</h1>
      <p>
        Find me in <code>./web/src/pages/AlonlernerPage/AlonlernerPage.js</code>
      </p>
      <p>
        My default route is named <code>alonlerner</code>, link to me with `
        <Link to={routes.alonlerner()}>Alonlerner</Link>`
      </p>
    </>
  )
}

export default AlonlernerPage
