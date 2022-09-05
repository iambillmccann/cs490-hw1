import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ShumsherdhillonPage = () => {
  return (
    <>
      <MetaTags title="Shumsherdhillon" description="Shumsherdhillon page" />

      <h1>ShumsherdhillonPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ShumsherdhillonPage/ShumsherdhillonPage.js</code>
      </p>
      <p>
        My default route is named <code>shumsherdhillon</code>, link to me with
        `<Link to={routes.shumsherdhillon()}>Shumsherdhillon</Link>`
      </p>
    </>
  )
}

export default ShumsherdhillonPage
