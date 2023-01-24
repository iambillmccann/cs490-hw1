import { render } from '@redwoodjs/testing/web'

import KeyadhruvePage from './KeyadhruvePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KeyadhruvePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeyadhruvePage />)
    }).not.toThrow()
  })
})
