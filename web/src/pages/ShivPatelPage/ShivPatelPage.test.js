import { render } from '@redwoodjs/testing/web'

import ShivPatelPage from './ShivPatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ShivPatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShivPatelPage />)
    }).not.toThrow()
  })
})
