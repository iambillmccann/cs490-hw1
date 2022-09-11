import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HarshilkumarkikaniPage = () => {
  return (
    <>
      <MetaTags
        title="Harshilkumarkikani"
        description="Harshilkumarkikani page"
      />

      <h1>Harsh&apos; Favorite Meme</h1>
      <p> CRAB RAVE </p>
      <img
        className="center"
        src="https://c.tenor.com/7Pz0ngJtK24AAAAd/crabs-dancing.gif"
        alt="Crabs Dancing on the Beach (Crab Rave meme)"
      />
    </>
  )
}

export default HarshilkumarkikaniPage
