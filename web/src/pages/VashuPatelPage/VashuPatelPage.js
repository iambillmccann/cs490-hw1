import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const VashuPatelPage = () => {
  return (
    <>
      <MetaTags title="VashuPatelpage" description="Vashu Patel page" />

      <h1>Vashu Patel Page</h1>
      <p>
        Find me in <code>./web/src/pages/VashuPatelPage/VashuPatelPage.js</code>
      </p>
      <h2>Github Username: vgp5</h2><br></br>
      <h2>Discord Name: patelvashu5#5559</h2>
      <h2>Favorite Meme:</h2><br></br>
      <img>meme.png</img>
      <p>
        My default route is named <code>vashuPatel</code>, link to me with `
        <Link to={routes.vashuPatel()}>VashuPatel</Link>`
      </p>
    </>
  )
}

export default VashuPatelPage
