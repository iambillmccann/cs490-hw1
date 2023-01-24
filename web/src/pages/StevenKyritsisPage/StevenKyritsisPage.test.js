import { render } from '@redwoodjs/testing/web'

import StevenKyritsisPage from './StevenKyritsisPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StevenKyritsisPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StevenKyritsisPage />)
    }).not.toThrow()
  })
})
