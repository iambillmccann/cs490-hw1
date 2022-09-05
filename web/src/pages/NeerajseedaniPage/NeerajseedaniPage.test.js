import { render } from '@redwoodjs/testing/web'

import NeerajseedaniPage from './NeerajseedaniPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NeerajseedaniPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NeerajseedaniPage />)
    }).not.toThrow()
  })
})
