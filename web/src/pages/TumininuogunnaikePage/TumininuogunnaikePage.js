import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TumininuogunnaikePage = () => {
  return (
    <>
      <MetaTags
        title="Tumininuogunnaike"
        description="Tumininuogunnaike page"
      />

      <h1>TumininuogunnaikePage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/TumininuogunnaikePage/TumininuogunnaikePage.js
        </code>
      </p>
      <p>
        My default route is named <code>tumininuogunnaike</code>, link to me
        with `<Link to={routes.tumininuogunnaike()}>Tumininuogunnaike</Link>`
      </p>
      <img
        className="center"
        src="https://bestanimations.com/media/computers/78704119funny-homer-computer-animated-gif-38.gif"
        alt="coding in progress!"
      />
    </>
  )
}

export default TumininuogunnaikePage
//I was able to edit this file
