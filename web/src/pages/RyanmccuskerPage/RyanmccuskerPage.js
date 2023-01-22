import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RyanmccuskerPage = () => {
  return (
    <>
      <MetaTags title="Ryan McCusker" description="Ryan McCusker's page" />

      <div align="center">
        <p><b>Name:</b> Ryan</p>
        <p><b>GitHub:</b> rjm8</p>
        <p><b>Discord:</b> potentialpaper#4579</p>
        <img src="https://images.pexels.com/photos/631546/pexels-photo-631546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="funny guy" />
        <p>I think this is a funny meme because his face is weird</p>
      </div>
    </>
  )
}

export default RyanmccuskerPage
