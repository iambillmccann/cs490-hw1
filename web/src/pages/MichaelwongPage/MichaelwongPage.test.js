import { render } from '@redwoodjs/testing/web'

import MichaelwongPage from './MichaelwongPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MichaelwongPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MichaelwongPage />)
    }).not.toThrow()
  })
})
