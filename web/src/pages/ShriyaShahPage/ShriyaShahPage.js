/*
Name: Shriya Shah
CS490-102
Homework 1
*/

import { MetaTags } from '@redwoodjs/web'

import './pretty.css'
import meme from './meme.jpg'

const ShriyaShahPage = () => {
  return (
    <>
      <body>
        <MetaTags title="ShriyaShah" description="ShriyaShah page" />

        <div className="box">
          <p className="text">
            <b>Hello there!</b>
            <br />
            Name: <i>Shriya Shah</i>
            <br />
            Github ID: <i>shriyashah1411</i>
            <br />
            Discord name: <i>Shriya#3471</i>
            <img src={meme} alt="pikachu meme" width={300} height={400} />
          </p>
        </div>
      </body>
    </>
  )
}

export default ShriyaShahPage

/* Extra stuff

      <p>
        Find me in <code>./web/src/pages/ShriyaShahPage/ShriyaShahPage.js</code>
      </p>
      <p>
        My default route is named <code>shriyaShah</code>, link to me with `
        <Link to={routes.shriyaShah()}>ShriyaShah</Link>`
      </p>

*/
