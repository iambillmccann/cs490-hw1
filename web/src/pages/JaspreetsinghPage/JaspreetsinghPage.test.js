import { render } from '@redwoodjs/testing/web'

import JaspreetsinghPage from './JaspreetsinghPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JaspreetsinghPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JaspreetsinghPage />)
    }).not.toThrow()
  })
})
