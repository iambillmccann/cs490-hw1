import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MohamedrachidPage = () => {
  return (
    <>
      <MetaTags title="Mohamedrachid" description="Mohamedrachid page" />

      <h1>MohamedrachidPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MohamedrachidPage/MohamedrachidPage.js</code>
      </p>
      <p>
        My default route is named <code>mohamedrachid</code>, link to me with `
        <Link to={routes.mohamedrachid()}>Mohamedrachid</Link>`
      </p>
    </>
  )
}

export default MohamedrachidPage
