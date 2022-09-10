import { MetaTags } from '@redwoodjs/web'

const WillisdoPage = () => {
  return (
    <>
      <MetaTags title="Willisdo" description="Willisdo page" />

      <h1>Willis' Favorite Gif</h1>
      
      <img 
      className="center"
      src="https://media.giphy.com/media/ghCX1B38YFXAwttIkg/giphy.gif" >
        
      </img>

    </>
  )
}

export default WillisdoPage
