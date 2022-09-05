import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AndrewfouadPage = () => {
  return (
    <>
      <MetaTags title="Andrewfouad" description="Andrewfouad page" />

      <h1>AndrewfouadPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AndrewfouadPage/AndrewfouadPage.js</code>
      </p>
      <p>
        My default route is named <code>andrewfouad</code>, link to me with `
        <Link to={routes.andrewfouad()}>Andrewfouad</Link>`
      </p>
    </>
  )
}

export default AndrewfouadPage
