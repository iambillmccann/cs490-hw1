import { render } from '@redwoodjs/testing/web'

import VrajshahPage from './VrajshahPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VrajshahPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VrajshahPage />)
    }).not.toThrow()
  })
})
