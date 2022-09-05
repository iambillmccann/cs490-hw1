import { render } from '@redwoodjs/testing/web'

import AndykimPage from './AndykimPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AndykimPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AndykimPage />)
    }).not.toThrow()
  })
})
