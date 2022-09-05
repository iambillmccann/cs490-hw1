import { render } from '@redwoodjs/testing/web'

import DilipchitbahalPage from './DilipchitbahalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DilipchitbahalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DilipchitbahalPage />)
    }).not.toThrow()
  })
})
