import { render } from '@redwoodjs/testing/web'

import JemilSrejicPage from './JemilSrejicPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JemilSrejicPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JemilSrejicPage />)
    }).not.toThrow()
  })
})
//new page jemil srejic