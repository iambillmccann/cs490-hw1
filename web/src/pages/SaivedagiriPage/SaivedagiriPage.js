import { MetaTags } from '@redwoodjs/web'

const SaivedagiriPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MetaTags title="Sai Vedagiri" description="Sai's page" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '0',
          margin: 'auto',
          width: '75%',
          position: 'absolute',
          top: '50%',
          left: '12.5%',
          border: '1px solid rgba(0,0,0,.175)',
        }}
      >
        <div
          className="card-body p-4"
          style={{ textAlign: 'center', padding: '1.5rem' }}
        >
          <h4 className="card-title">Sai Vedagiri</h4>
          <p className="card-text">
            GitHub: <a href="https://github.com/SaiVedagiri">@SaiVedagiri</a>
            <br />
            Discord: Sai#3914
          </p>
          <img
            src="https://global-uploads.webflow.com/5e2b8863ba7fff8df8949888/62bf45a9e5f588438460341a_Haechan%20And%20Hide%20%26%20Seek%20meme.jpg"
            width="30%"
            alt="Haechan Hide and Seek"
            style={{ margin: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}

export default SaivedagiriPage
