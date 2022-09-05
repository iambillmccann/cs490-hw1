import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RobertdiasioPage = () => {
  return (
    <>
      <MetaTags title="Robertdiasio" description="Robertdiasio page" />

      <h1>RobertdiasioPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RobertdiasioPage/RobertdiasioPage.js</code>
      </p>
      <p>
        My default route is named <code>robertdiasio</code>, link to me with `
        <Link to={routes.robertdiasio()}>Robertdiasio</Link>`
      </p>
    </>
  )
}

export default RobertdiasioPage
