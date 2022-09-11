import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TylerberkmanPage = () => {
  return (
    <>
      <MetaTags title="Tylerberkman" description="Tylerberkman page" />

      <img
        className="center"
        src="https://i.imgur.com/J0dIooR.jpeg"
        alt="This is how much it cost me to make this page"
      />
    </>
  )
}

export default TylerberkmanPage
