import { render } from '@redwoodjs/testing/web'

import ArijqureshiPage from './ArijqureshiPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArijqureshiPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArijqureshiPage />)
    }).not.toThrow()
  })
})
