import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DhruvilkansaraPage = () => {
  return (
    <>
      <MetaTags title="Dhruvilkansara" description="Dhruvilkansara page" />

      <h1>DhruvilkansaraPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/DhruvilkansaraPage/DhruvilkansaraPage.js</code>
      </p>
      <p>
        My default route is named <code>dhruvilkansara</code>, link to me with `
        <Link to={routes.dhruvilkansara()}>Dhruvilkansara</Link>`
      </p>
    </>
  )
}

export default DhruvilkansaraPage
