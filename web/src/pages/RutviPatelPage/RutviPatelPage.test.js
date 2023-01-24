import { render } from '@redwoodjs/testing/web'

import RutviPatelPage from './RutviPatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RutviPatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RutviPatelPage />)
    }).not.toThrow()
  })
})
