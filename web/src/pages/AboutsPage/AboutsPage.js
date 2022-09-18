import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutsPage = () => {
  return (
    <>
      <MetaTags title="Abouts" description="Abouts page" />

      <h1>AboutsPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutsPage/AboutsPage.js</code>
      </p>
      <p>
        My default route is named <code>abouts</code>, link to me with `
        <Link to={routes.abouts()}>Abouts</Link>`
      </p>
    </>
  )
}

export default AboutsPage
