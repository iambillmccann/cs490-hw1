import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import meme from './meme.jpg'
const Mvd29Page = () => {
  return (
    <>
      <MetaTags title="Mvd29" description="Mvd29 page" />

      <p>
        Name: Manal Desai
      </p>
      <p>
        GitHub: mvd29
      </p>
      <p>
        Discord: Manal#2492
      </p>
     <img src={meme} alt="meme.jpg"></img>
    </>
  )
}

export default Mvd29Page
