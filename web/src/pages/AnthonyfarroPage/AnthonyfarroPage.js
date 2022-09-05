import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AnthonyfarroPage = () => {
  return (
    <>
      <MetaTags title="Anthonyfarro" description="Anthonyfarro page" />

      <h1>AnthonyfarroPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AnthonyfarroPage/AnthonyfarroPage.js</code>
      </p>
      <p>
        My default route is named <code>anthonyfarro</code>, link to me with `
        <Link to={routes.anthonyfarro()}>Anthonyfarro</Link>`
      </p>
    </>
  )
}

export default AnthonyfarroPage
