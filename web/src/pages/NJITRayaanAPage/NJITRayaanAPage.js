import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NjitRayaanAPage = () => {
  return (
    <>
      <MetaTags title="NjitRayaanA" description="NjitRayaanA page" />

      <h1>NjitRayaanAPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NJITRayaanAPage/NJITRayaanAPage.js</code>
      </p>
      <p>
        My default route is named <code>njitRayaanA</code>, link to me with `
        <Link to={routes.njitRayaanA()}>NjitRayaanA</Link>`
      </p>
      Hello, my name is Rayaan Azmi, GithubID is NJITRayaanA, discord name is RayaanA.
      <img
          src="https://media1.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif?cid=ecf05e47v401yjvmyc417l1czpjwhw2gjdywps5vxsbir7xi&rid=giphy.gif&ct=g"
          alt="Error page not found"
        />
    </>
  )
}

export default NjitRayaanAPage
