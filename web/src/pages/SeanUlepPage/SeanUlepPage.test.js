import { render } from '@redwoodjs/testing/web'

import SeanUlepPage from './SeanUlepPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SeanUlepPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeanUlepPage />)
    }).not.toThrow()
  })
})
