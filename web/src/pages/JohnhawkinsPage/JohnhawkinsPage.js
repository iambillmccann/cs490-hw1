import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const JohnhawkinsPage = () => {
  return (
    <>
      <MetaTags title="Johnhawkins" description="Johnhawkins page" />

      <img
        className="center"
        src="https://img-9gag-fun.9cache.com/photo/6930489_460s.jpg"
        alt="Ya don't say meme"
      />
    </>
  )
}

export default JohnhawkinsPage
