import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ElimojicaPage = () => {
  return (
    <>
      <MetaTags title="Elimojica" description="Elimojica page" />

      <h1>Eli Mojica</h1>
      <p>
        Find me in <code>./web/src/pages/ElimojicaPage/ElimojicaPage.js</code>
      </p>
      <p>
        My default route is named <code>elimojica</code>, link to me with `
        <Link to={routes.elimojica()}>Elimojica</Link>`
      </p>

      <p>Discord Account: Eli#0714</p>
      <p>
        Github Account: <a href="https://github.com/Elmojica">Elmojica</a>
      </p>

      <img src="https://media.tenor.com/do8q_eYrsW4AAAAd/crying-black-guy-meme.gif"></img>
    
    </>
  )
}

export default ElimojicaPage
