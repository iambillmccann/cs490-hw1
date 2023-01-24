import { render } from '@redwoodjs/testing/web'

import RyanmccuskerPage from './RyanmccuskerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RyanmccuskerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RyanmccuskerPage />)
    }).not.toThrow()
  })
})
