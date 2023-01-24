import { render } from '@redwoodjs/testing/web'

import MateamilloshiPage from './MateamilloshiPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MateamilloshiPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MateamilloshiPage />)
    }).not.toThrow()
  })
})
