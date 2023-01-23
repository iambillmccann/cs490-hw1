import { render } from '@redwoodjs/testing/web'

import JaspreetSinghPage from './JaspreetSinghPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JaspreetSinghPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JaspreetSinghPage />)
    }).not.toThrow()
  })
})
