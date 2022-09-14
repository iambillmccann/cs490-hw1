import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AlecgarbelyPage = () => {
  return (
    <>
      <MetaTags title="Alecgarbely" description="Alecgarbely page" />

      <h1>AlecgarbelyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AlecgarbelyPage/AlecgarbelyPage.js</code>
      </p>
      <p>
        My default route is named <code>alecgarbely</code>, link to me with `
        <Link to={routes.alecgarbely()}>Alecgarbely</Link>`
      </p>
    </>
  )
}

export default AlecgarbelyPage
