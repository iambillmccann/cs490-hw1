import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MichaelwongPage = () => {
  return (
    <>
      <MetaTags title="Michaelwong" description="Michaelwong page" />

      <h1>MichaelwongPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MichaelwongPage/MichaelwongPage.js</code>
      </p>
      <p>
        My default route is named <code>michaelwong</code>, link to me with `
        <Link to={routes.michaelwong()}>Michaelwong</Link>`
      </p>
      <img src="https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif"></img>
    </>
  )
}

export default MichaelwongPage
//THIS FILE HAS BEEN CHANGED DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
