import { render } from '@redwoodjs/testing/web'

import JillianjacintoPage from './JillianjacintoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JillianjacintoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JillianjacintoPage />)
    }).not.toThrow()
  })
})
