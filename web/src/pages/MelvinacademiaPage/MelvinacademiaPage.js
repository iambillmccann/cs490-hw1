import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MelvinacademiaPage = () => {
  return (
    <>
      <MetaTags title="Melvinacademia" description="Melvinacademia page" />

      <h1>MelvinacademiaPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MelvinacademiaPage/MelvinacademiaPage.js</code>
      </p>
      <p>
        My default route is named <code>melvinacademia</code>, link to me with `
        <Link to={routes.melvinacademia()}>Melvinacademia</Link>`
      </p>
    </>
  )
}

export default MelvinacademiaPage
