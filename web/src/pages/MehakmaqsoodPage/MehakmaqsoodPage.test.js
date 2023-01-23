import { render } from '@redwoodjs/testing/web'

import MehakmaqsoodPage from './MehakmaqsoodPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MehakmaqsoodPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MehakmaqsoodPage />)
    }).not.toThrow()
  })
})
