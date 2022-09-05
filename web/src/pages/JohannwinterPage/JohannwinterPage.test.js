import { render } from '@redwoodjs/testing/web'

import JohannwinterPage from './JohannwinterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JohannwinterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JohannwinterPage />)
    }).not.toThrow()
  })
})
