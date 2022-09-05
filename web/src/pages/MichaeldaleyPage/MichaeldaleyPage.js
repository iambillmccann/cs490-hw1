import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MichaeldaleyPage = () => {
  return (
    <>
      <MetaTags title="Michaeldaley" description="Michaeldaley page" />

      <h1>MichaeldaleyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MichaeldaleyPage/MichaeldaleyPage.js</code>
      </p>
      <p>
        My default route is named <code>michaeldaley</code>, link to me with `
        <Link to={routes.michaeldaley()}>Michaeldaley</Link>`
      </p>
    </>
  )
}

export default MichaeldaleyPage
