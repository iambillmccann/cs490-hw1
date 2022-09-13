import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const JohannwinterPage = () => {
  return (
    <>
      <MetaTags title="Johannwinter" description="Johannwinter page" />

      <h1>JohannwinterPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/JohannwinterPage/JohannwinterPage.js</code>
      </p>
      <p>
        My default route is named <code>johannwinter</code>, link to me with `
        <Link to={routes.johannwinter()}>Johannwinter</Link>`
      </p>
      <img src="https://media1.giphy.com/media/SqGzDP3l5NNQY/giphy.gif"/>
    </>
  )
}

export default JohannwinterPage
