import { render } from '@redwoodjs/testing/web'

import MichaeldaleyPage from './MichaeldaleyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MichaeldaleyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MichaeldaleyPage />)
    }).not.toThrow()
  })
})
