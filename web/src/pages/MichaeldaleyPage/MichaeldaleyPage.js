import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MichaeldaleyPage = () => {
  return (
    <>
      <MetaTags title="Michael Daley" description="Michael_Daley's page" />

      <h1 align="center">Michael Daley</h1>
      <h3 align="center">Build Successfully</h3>
      <img
        className="center"
        src="https://media.giphy.com/media/etOX3h7ApZuDe7Fc5w/giphy-downsized-large.gif"
        alt="code doesn't compile"
        />
    </>
  )
}

export default MichaeldaleyPage

