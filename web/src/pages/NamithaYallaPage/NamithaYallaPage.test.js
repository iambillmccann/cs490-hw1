import { render } from '@redwoodjs/testing/web'

import NamithaYallaPage from './NamithaYallaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NamithaYallaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NamithaYallaPage />)
    }).not.toThrow()
  })
})
