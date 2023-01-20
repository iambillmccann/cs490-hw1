import { render } from '@redwoodjs/testing/web'

import NehashirwalkerPage from './NehashirwalkerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NehashirwalkerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NehashirwalkerPage />)
    }).not.toThrow()
  })
})
