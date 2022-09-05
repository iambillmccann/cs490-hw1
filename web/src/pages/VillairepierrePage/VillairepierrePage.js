import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const VillairepierrePage = () => {
  return (
    <>
      <MetaTags title="Villairepierre" description="Villairepierre page" />

      <h1>VillairepierrePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/VillairepierrePage/VillairepierrePage.js</code>
      </p>
      <p>
        My default route is named <code>villairepierre</code>, link to me with `
        <Link to={routes.villairepierre()}>Villairepierre</Link>`
      </p>
    </>
  )
}

export default VillairepierrePage
