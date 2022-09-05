import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div>
        <li>
          <Link to={routes.billmccann()}>Bill McCann</Link>
        </li>
      </div>
    </>
  )
}

export default HomePage
