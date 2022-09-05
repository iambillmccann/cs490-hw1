import { render } from '@redwoodjs/testing/web'

import SergioacevedoPage from './SergioacevedoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SergioacevedoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SergioacevedoPage />)
    }).not.toThrow()
  })
})
