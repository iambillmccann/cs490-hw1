import { render } from '@redwoodjs/testing/web'

import KellyannegeorgePage from './KellyannegeorgePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KellyannegeorgePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KellyannegeorgePage />)
    }).not.toThrow()
  })
})
