import { render } from '@redwoodjs/testing/web'

import Test2Page from './Test2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Test2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Test2Page />)
    }).not.toThrow()
  })
})
