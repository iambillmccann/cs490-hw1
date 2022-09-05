import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DilipchitbahalPage = () => {
  return (
    <>
      <MetaTags title="Dilipchitbahal" description="Dilipchitbahal page" />

      <h1>DilipchitbahalPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/DilipchitbahalPage/DilipchitbahalPage.js</code>
      </p>
      <p>
        My default route is named <code>dilipchitbahal</code>, link to me with `
        <Link to={routes.dilipchitbahal()}>Dilipchitbahal</Link>`
      </p>
    </>
  )
}

export default DilipchitbahalPage
