import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AleynaaydinPage = () => {
  return (
    <>
      <MetaTags title="Aleynaaydin" description="Aleynaaydin page" />

      <h1>AleynaaydinPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AleynaaydinPage/AleynaaydinPage.js</code>
      </p>
      <p>
        My default route is named <code>aleynaaydin</code>, link to me with `
        <Link to={routes.aleynaaydin()}>Aleynaaydin</Link>`
      </p>
      <img
        className="center"
        src="https://tenor.com/bg1y2.gif"
        alt="spooky season"
      />
    </>
  )
}

export default AleynaaydinPage
