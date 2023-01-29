import { render } from '@redwoodjs/testing/web'

import CaseyPage from './CaseyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CaseyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CaseyPage />)
    }).not.toThrow()
  })
})
