import { render } from '@redwoodjs/testing/web'

import ErikChodabaPage from './ErikChodabaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ErikChodabaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ErikChodabaPage />)
    }).not.toThrow()
  })
})
