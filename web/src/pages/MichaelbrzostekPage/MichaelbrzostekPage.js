import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MichaelbrzostekPage = () => {
  return (
    <>
      <MetaTags title="Michaelbrzostek" description="Michaelbrzostek page" />

      <h1>MichaelbrzostekPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MichaelbrzostekPage/MichaelbrzostekPage.js</code>
      </p>
      <p>
        My default route is named <code>michaelbrzostek</code>, link to me with
        `<Link to={routes.michaelbrzostek()}>Michaelbrzostek</Link>`
      </p>
    </>
  )
}

export default MichaelbrzostekPage
