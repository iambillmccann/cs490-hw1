import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import img from './suffering.jpg'

const VillairepierrePage = () => {
  return (
    <>
      <MetaTags title="Villairepierre" description="Villairepierre page" />

      <h1>VillairepierrePage</h1>
      <body>
        <img src = {img} alt = 'sample' />
      </body>

    </>
  )
}

export default VillairepierrePage
