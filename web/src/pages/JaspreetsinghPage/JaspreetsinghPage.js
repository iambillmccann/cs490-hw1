import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const JaspreetsinghPage = () => {
  return (
    <>
      <MetaTags title="Jaspreetsingh" description="Jaspreetsingh page" />

      <h1>JaspreetsinghPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/JaspreetsinghPage/JaspreetsinghPage.js</code>
      </p>
      <p>
        My default route is named <code>jaspreetsingh</code>, link to me with `
        <Link to={routes.jaspreetsingh()}>Jaspreetsingh</Link>`
      </p>
    </>
  )
}

export default JaspreetsinghPage
