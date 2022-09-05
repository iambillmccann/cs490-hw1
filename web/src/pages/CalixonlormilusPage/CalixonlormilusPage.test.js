import { render } from '@redwoodjs/testing/web'

import CalixonlormilusPage from './CalixonlormilusPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CalixonlormilusPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CalixonlormilusPage />)
    }).not.toThrow()
  })
})
