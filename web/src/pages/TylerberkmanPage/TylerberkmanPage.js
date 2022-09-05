import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TylerberkmanPage = () => {
  return (
    <>
      <MetaTags title="Tylerberkman" description="Tylerberkman page" />

      <h1>TylerberkmanPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TylerberkmanPage/TylerberkmanPage.js</code>
      </p>
      <p>
        My default route is named <code>tylerberkman</code>, link to me with `
        <Link to={routes.tylerberkman()}>Tylerberkman</Link>`
      </p>
    </>
  )
}

export default TylerberkmanPage
