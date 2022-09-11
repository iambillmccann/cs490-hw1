import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HarshilkumarkikaniPage = () => {
  return (
    <>
      <MetaTags
        title="Harshilkumarkikani"
        description="Harshilkumarkikani page"
      />

      <h1>HarshilkumarkikaniPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/HarshilkumarkikaniPage/HarshilkumarkikaniPage.js
        </code>
      </p>
      <p>
        My default route is named <code>harshilkumarkikani</code>, link to me
        with `<Link to={routes.harshilkumarkikani()}>Harshilkumarkikani</Link>`
      </p>
    </>
  )
}

export default HarshilkumarkikaniPage
