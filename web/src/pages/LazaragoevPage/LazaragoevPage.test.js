import { render } from '@redwoodjs/testing/web'

import LazaragoevPage from './LazaragoevPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LazaragoevPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LazaragoevPage />)
    }).not.toThrow()
  })
})
