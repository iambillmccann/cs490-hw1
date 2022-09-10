import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
// function setup(){
//   loadImage('image.jpg')
// }

const SergioacevedoPage = () => {
  return (
    <>
      <MetaTags title="Sergioacevedo" description="Sergioacevedo page" />

      {/* <h1>SergioacevedoPage</h1> */}
      <p>
      <img src="image.jpg" alt="hola"/>
        {/* Find me in{' '}
        <code>./web/src/pages/SergioacevedoPage/SergioacevedoPage.js</code> */}
      </p>
      {/* <p>
        My default route is named <code>sergioacevedo</code>, link to me with `
        <Link to={routes.sergioacevedo()}>Sergioacevedo</Link>`
      </p> */}
    </>
  )
}

export default SergioacevedoPage
