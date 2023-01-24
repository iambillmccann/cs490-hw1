import { render } from '@redwoodjs/testing/web'

import TomEhrolaPage from './TomEhrolaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TomEhrolaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TomEhrolaPage />)
    }).not.toThrow()
  })
})
