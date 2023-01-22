import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RyanmccuskerPage = () => {
  return (
    <>
      <MetaTags title="Ryanmccusker" description="Ryanmccusker page" />

      <h1>RyanmccuskerPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RyanmccuskerPage/RyanmccuskerPage.js</code>
      </p>
      <p>
        My default route is named <code>ryanmccusker</code>, link to me with `
        <Link to={routes.ryanmccusker()}>Ryanmccusker</Link>`
      </p>
    </>
  )
}

export default RyanmccuskerPage
