import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WillisdoPage = () => {
  return (
    <>
      <MetaTags title="Willisdo" description="Willisdo page" />

      <h1>WillisdoPage</h1>
      <p>
        Find me in <code>./web/src/pages/WillisdoPage/WillisdoPage.js</code>
      </p>
      <p>
        My default route is named <code>willisdo</code>, link to me with `
        <Link to={routes.willisdo()}>Willisdo</Link>`
      </p>
    </>
  )
}

export default WillisdoPage
