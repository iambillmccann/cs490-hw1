import { render } from '@redwoodjs/testing/web'

import BillmccannPage from './BillmccannPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BillmccannPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BillmccannPage />)
    }).not.toThrow()
  })
})
