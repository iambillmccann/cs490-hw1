import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TimothygurguisPage = () => {
  return (
    <>
      <MetaTags title="Timothygurguis" description="Timothygurguis page" />

      <h1>TimothygurguisPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TimothygurguisPage/TimothygurguisPage.js</code>
      </p>
      <p>
        My default route is named <code>timothygurguis</code>, link to me with `
        <Link to={routes.timothygurguis()}>Timothygurguis</Link>`
      </p>
    </>
  )
}

export default TimothygurguisPage
