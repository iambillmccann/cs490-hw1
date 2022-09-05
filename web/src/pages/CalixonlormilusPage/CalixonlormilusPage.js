import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CalixonlormilusPage = () => {
  return (
    <>
      <MetaTags title="Calixonlormilus" description="Calixonlormilus page" />

      <h1>CalixonlormilusPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/CalixonlormilusPage/CalixonlormilusPage.js</code>
      </p>
      <p>
        My default route is named <code>calixonlormilus</code>, link to me with
        `<Link to={routes.calixonlormilus()}>Calixonlormilus</Link>`
      </p>
    </>
  )
}

export default CalixonlormilusPage
