import { render } from '@redwoodjs/testing/web'

import RobertdiasioPage from './RobertdiasioPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RobertdiasioPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RobertdiasioPage />)
    }).not.toThrow()
  })
})
