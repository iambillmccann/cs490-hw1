import { render } from '@redwoodjs/testing/web'

import JohnhawkinsPage from './JohnhawkinsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JohnhawkinsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JohnhawkinsPage />)
    }).not.toThrow()
  })
})
