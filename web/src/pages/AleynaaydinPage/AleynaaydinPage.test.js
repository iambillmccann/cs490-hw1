import { render } from '@redwoodjs/testing/web'

import AleynaaydinPage from './AleynaaydinPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AleynaaydinPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AleynaaydinPage />)
    }).not.toThrow()
  })
})
