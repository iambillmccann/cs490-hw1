import { render } from '@redwoodjs/testing/web'

import ManthanpatelPage from './ManthanpatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ManthanpatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ManthanpatelPage />)
    }).not.toThrow()
  })
})
