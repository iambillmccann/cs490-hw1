import { render } from '@redwoodjs/testing/web'

import VashuPatelPage from './VashuPatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VashuPatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VashuPatelPage />)
    }).not.toThrow()
  })
})
