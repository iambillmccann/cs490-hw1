import { render } from '@redwoodjs/testing/web'

import PedropachecoPage from './PedropachecoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PedropachecoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PedropachecoPage />)
    }).not.toThrow()
  })
})
