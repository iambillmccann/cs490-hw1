import { MetaTags } from '@redwoodjs/web'

const WillisdoPage = () => {
  return (
    <>
      <MetaTags title="Willisdo" description="Willisdo page" />

      <h1>Willis&apos; Favorite Gif</h1>
      <img
        className="center"
        src="https://media.giphy.com/media/ghCX1B38YFXAwttIkg/giphy.gif"
        alt="Willis' Favorite Gif"
      ></img>
    </>
  )
}

export default WillisdoPage
