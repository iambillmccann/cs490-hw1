import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NamithaYallaPage = () => {
  return (
    <>
      <MetaTags title="NamithaYalla" description="NamithaYalla page" />

      <h1>NamithaYallaPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NamithaYallaPage/NamithaYallaPage.js</code>
      </p>
      <p>
        My default route is named <code>namithaYalla</code>, link to me with `
        <Link to={routes.namithaYalla()}>NamithaYalla</Link>`
      </p>
    </>
  )
}

export default NamithaYallaPage
