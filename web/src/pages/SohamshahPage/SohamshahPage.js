import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SohamshahPage = () => {
  return (
    <>
      <MetaTags title="Sohamshah" description="Sohamshah page" />

      <h1>SohamshahPage</h1>
      <iframe
        className="center"
        src="https://giphy.com/embed/E69lV4uZfmqpu0S1JA"
        alt="When class finally ends"
      />
    </>
  )
}

export default SohamshahPage
