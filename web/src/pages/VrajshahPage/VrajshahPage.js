import { MetaTags } from '@redwoodjs/web'

const VrajshahPage = () => {
  return (
    <>
      <MetaTags title="Vrajshah" description="Vrajshah page" />
      <div
        style={{
          background: 'radial-gradient(#1fa2ff, #12d8fa, #a6ffcb)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ textAlign: 'center' }}> {"Vraj's Page"}</h1>
        <img
          src={
            'https://media.giphy.com/media/YWf50NNii3r4k/giphy-downsized-large.gif'
          }
          alt={'gif'}
          style={{ width: '75%' }}
        ></img>
      </div>
    </>
  )
}

export default VrajshahPage
