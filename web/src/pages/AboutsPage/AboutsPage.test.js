import { render } from '@redwoodjs/testing/web'

import AboutsPage from './AboutsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AboutsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutsPage />)
    }).not.toThrow()
  })
})
