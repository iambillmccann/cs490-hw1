import { render } from '@redwoodjs/testing/web'

import SakethLakshmananPage from './SakethLakshmananPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SakethLakshmananPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SakethLakshmananPage />)
    }).not.toThrow()
  })
})
