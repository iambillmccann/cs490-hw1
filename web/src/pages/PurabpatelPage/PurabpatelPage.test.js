import { render } from '@redwoodjs/testing/web'

import PurabpatelPage from './PurabpatelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PurabpatelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PurabpatelPage />)
    }).not.toThrow()
  })
})
