import { render } from '@redwoodjs/testing/web'

import DhyeyPage from './DhyeyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DhyeyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DhyeyPage />)
    }).not.toThrow()
  })
})
