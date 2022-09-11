import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SakthivelanmanikanthanPage = () => {
  return (
    <>
      <MetaTags
        title="Sakthivelanmanikanthan"
        description="Sakthivelanmanikanthan page"
      />

      <h1>SakthivelanmanikanthanPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/SakthivelanmanikanthanPage/SakthivelanmanikanthanPage.js
        </code>
      </p>
      <p>
        My default route is named <code>sakthivelanmanikanthan</code>, link to
        me with `
        <Link to={routes.sakthivelanmanikanthan()}>Sakthivelanmanikanthan</Link>
        `
      </p>
    </>
  )
}

export default SakthivelanmanikanthanPage
