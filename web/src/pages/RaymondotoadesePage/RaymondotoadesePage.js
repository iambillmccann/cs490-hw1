import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RaymondotoadesePage = () => {
  return (
    <>
      <MetaTags title="Raymondotoadese" description="Raymondotoadese page" />

      <h1>RaymondotoadesePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RaymondotoadesePage/RaymondotoadesePage.js</code>
      </p>
      <p>
        My default route is named <code>raymondotoadese</code>, link to me with
        `<Link to={routes.raymondotoadese()}>Raymondotoadese</Link>`
      </p>
    </>
  )
}

export default RaymondotoadesePage
