import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import './SafiullahBaig.css'
import computerScienceMeme from './meme.jpg'

const SafiullahBaigPage = () => {
  return (
    <div className="safiullah-baig-page">
      <MetaTags title="SafiullahBaig" description="SafiullahBaig page" />

      <h1 className="text-center">Hello! My name is Safiullah Baig</h1>
      <p className="text-center">
        My Discord name is <span className="highlight">sb#4971</span> and my
        GitHub ID is <span className="highlight">safiullah7860</span>
      </p>
      <div className="img-container">
        <img
          src={computerScienceMeme}
          alt="Meme about computer science"
          className="meme-img"
          width="50%"
          height="50%"
        />
      </div>
    </div>
  )
}

export default SafiullahBaigPage
