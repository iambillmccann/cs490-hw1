import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LeonardoulloaPage = () => {
  return (
    <>
      <MetaTags title="Leonardoulloa" description="Leonardoulloa page" />

      <h1>LeonardoulloaPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/LeonardoulloaPage/LeonardoulloaPage.js</code>
      </p>
      <p>
        My default route is named <code>leonardoulloa</code>, link to me with `
        <Link to={routes.leonardoulloa()}>Leonardoulloa</Link>`
      </p>
    </>
  )
}

export default LeonardoulloaPage
