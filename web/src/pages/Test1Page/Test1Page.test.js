import { render } from '@redwoodjs/testing/web'

import Test1Page from './Test1Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Test1Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Test1Page />)
    }).not.toThrow()
  })
})
