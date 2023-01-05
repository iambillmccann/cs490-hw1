import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div>
        <p>
          <Link to={routes.billmccann()}>Bill McCann</Link> (use
          ./web/src/pages/BillmccannPage.js as an example )
        </p>
      </div>
    </>
  )
}

export default HomePage
