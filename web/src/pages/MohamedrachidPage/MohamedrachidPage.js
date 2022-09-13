import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MohamedrachidPage = () => {
  return (
    <>
      <MetaTags title="Mohamedrachid" description="Mohamedrachid page" />

      <h1>Mohamed Rachid Page</h1>
      <img
        className="center"
        src='https://i.imgur.com/i77ZzBR.jpg'
        width={500}
        height={500}
        alt="Coleslaw eaters are bad people"
      />
    </>
  )
}

export default MohamedrachidPage
