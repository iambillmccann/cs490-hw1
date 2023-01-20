import { render } from '@redwoodjs/testing/web'

import JemilLayout from './JemilLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JemilLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JemilLayout />)
    }).not.toThrow()
  })
})
