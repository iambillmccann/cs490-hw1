import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RaymondotoadesePage = () => {
  return (
    <>
      <MetaTags title="Raymondotoadese" description="Raymondotoadese page" />

      <h1>Raymond Otoadese</h1>
      
      
      <p>
        <Link to={routes.raymondotoadese()}>Raymondotoadese</Link>`
      </p>

      <img  class="center" src='https://i.gifer.com/3Kk0.gif' >
      </img>
      
    </>
  )
}

export default RaymondotoadesePage
